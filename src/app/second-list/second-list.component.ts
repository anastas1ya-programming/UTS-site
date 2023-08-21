import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-second-list',
  templateUrl: './second-list.component.html',
  styleUrls: ['./second-list.component.scss']
})

export class SecondListComponent {
  constructor(private el: ElementRef) {}
  scrollToElement(elementId: string): void {
    const element = this.el.nativeElement.querySelector(`#${elementId}`);

    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



}





