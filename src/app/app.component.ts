import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-uts';
  sidebarOpen: boolean = false;
  toggleSidebar(){
    this.sidebarOpen=!this.sidebarOpen;
  }
}
