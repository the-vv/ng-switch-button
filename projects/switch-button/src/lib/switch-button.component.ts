import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-switchButton',
  template: `
    <button class="main-button">123</button>
  `,
  styles: []
})
export class SwitchButtonComponent {

  @Input() options = {}

  constructor() { }


}
