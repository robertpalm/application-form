import {Component, Input} from "@angular/core";
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: 'message.component.html',
  imports: [
    NgStyle,
    NgIf
  ],
  styleUrls: ['message.component.css']
})
export class MessageComponent {
  @Input() text: string = '';
  @Input() type: 'info' | 'error' | 'success' = 'info';

  constructor() {}

  getStyles() {
    let styles = {
      'background-color': '',
      'color': 'white'
    };
    switch (this.type) {
      case 'info':
        styles['background-color'] = '#2196f3';
        break;
      case 'error':
        styles ['background-color'] = '#e53935';
        break;
      case 'success':
        styles['background-color'] = '#4caf50';
        break;
    }
    return styles;
  }
}
