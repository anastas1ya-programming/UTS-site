import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {transition} from "@angular/animations";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
@Input() isOpen: boolean;
@Output() toggle: EventEmitter<void> = new EventEmitter<void>();
toggleSidebar(){
    this.toggle.emit();

}


}
