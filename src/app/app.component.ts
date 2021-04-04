import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-resume';

  public resumeInfo: any = {};

  constructor(public resume: ResumeService, private titleService: Title) {
    resume.getResumeInfo().subscribe(data => {
      this.resumeInfo = data;
      titleService.setTitle(data.user.firstName + " " + data.user.lastName);
    });
  }
}
