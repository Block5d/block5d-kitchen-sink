import { Component } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isCollapsed = false;
  parentCrumb: string = 'Project Setup';

  onClickCurrentParentCrumb(name: string) {
    console.log(name);
    this.parentCrumb = name;
  }
}
