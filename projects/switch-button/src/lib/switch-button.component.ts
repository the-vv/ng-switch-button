import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SwitchButtonSize, SwitchButtonType, SwitchLabelSlot } from './options';

@Component({
  selector: 'ng-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
})
export class SwitchButtonComponent implements OnChanges {

  @Input() public classList = '';
  @Input() public checked = false;
  @Input() public disabled = false;
  @Input() public size: keyof typeof SwitchButtonSize | SwitchButtonSize = SwitchButtonSize.medium;
  @Input() public checkedLabel = '';
  @Input() public uncheckedLabel = '';
  @Input() public checkedIcon = '';
  @Input() public uncheckedIcon = '';
  @Input() public type: keyof typeof SwitchButtonType | SwitchButtonType = SwitchButtonType.circle;
  @Input() public labelSlot: keyof typeof SwitchLabelSlot | SwitchLabelSlot = SwitchLabelSlot.right;
  @Input() public loading = false;

  public buttonclasslist: string[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.buttonclasslist = [];
    if (changes['classList']) {
      this.buttonclasslist = [...this.buttonclasslist, ...this.classList?.split(' ')];
    }
    if (changes['size']) {
      this.buttonclasslist = [...this.buttonclasslist, `sb-${this.size}-size-button`];
    }
    if (changes['type']) {
      this.buttonclasslist = [...this.buttonclasslist, `sb-${this.type}-type-button`];
    }
    if (changes['checkedLabel'] || changes['uncheckedLabel']) {
      this.buttonclasslist = [...this.buttonclasslist, 'sb-label-button'];
    } else {
      this.buttonclasslist = [...this.buttonclasslist, 'sb-icon-button'];
    }
    if (this.buttonclasslist.length === 0) {
      this.buttonclasslist = ['sb-icon-button', 'sb-medium-size-button', 'sb-circle-type-button', 'sb-default-button'];
    }
  }


}
