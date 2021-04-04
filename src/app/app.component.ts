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

  public itemStyles: string = "";
  public baseStyles: string = "";

  constructor(public resume: ResumeService, private titleService: Title) {
    resume.getResumeInfo().subscribe(data => {
      this.resumeInfo = data;
      titleService.setTitle(data.user.firstName + " " + data.user.lastName);
      if (data.colors) {
        // Set styles for body
        if (data.colors.background) {
          this.baseStyles += "background-color: " + data.colors.background + ";";
        }
        if (data.colors.foreground) {
          this.baseStyles += "color: " + data.colors.foreground+ ";";
        }
        document.getElementById("color-base").setAttribute("style", this.baseStyles);
        // Set styles for items
        if (data.colors.itemForeground) {
          this.itemStyles += "background-color: " + data.colors.itemBackground + ";";
        }
        if (data.colors.itemBackground) {
          this.itemStyles += "color: " + data.colors.itemForeground+ ";";
        }
      }
    });
  }
}
