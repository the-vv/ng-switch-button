import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SwitchButtonSize, SwitchButtonType, SwitchLabelSlot } from './options';

@Component({
  selector: 'ngx-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SwitchButtonComponent
    }
  ]
})
export class SwitchButtonComponent implements OnChanges {

  public disabled = false;
  @Input('disabled') public disabledButton = false;
  @Input() public classList = '';
  @Input() public checked = false;
  @Input() public size: keyof typeof SwitchButtonSize | SwitchButtonSize = SwitchButtonSize.medium;
  @Input() public checkedLabel = '';
  @Input() public uncheckedLabel = '';
  @Input() public checkedIcon = '';
  @Input() public uncheckedIcon = '';
  @Input() public type: keyof typeof SwitchButtonType | SwitchButtonType = SwitchButtonType.circle;
  @Input() public labelSlot: keyof typeof SwitchLabelSlot | SwitchLabelSlot = SwitchLabelSlot.right;
  @Input() public loading = false;
  @Input() public checkedTextColor = '#fff';
  @Input() public unCheckedTextColor = '#fff';
  @Input() public checkedBackgroundColor = '#198754';
  @Input() public unCheckedBackgroundColor = '#DC3545';

  public buttonclasslist: string[] = [];

  constructor() {
  }

  onChange = (val: any) => { };
  onTouched = () => { };

  writeValue(checked: boolean) {
    this.checked = checked;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.buttonclasslist = [];
    if (this.classList) {
      this.buttonclasslist = [...this.buttonclasslist, ...this.classList?.split(' ')];
    }
    if (this.size) {
      this.buttonclasslist = [...this.buttonclasslist, `sb-${this.size}-size-button`];
    }
    if (this.type) {
      this.buttonclasslist = [...this.buttonclasslist, `sb-${this.type}-type-button`];
    }
    if (this.checkedLabel || this.uncheckedLabel) {
      this.buttonclasslist = [...this.buttonclasslist, 'sb-label-button'];
    } else {
      this.buttonclasslist = [...this.buttonclasslist, 'sb-icon-button'];
    }
    if (this.buttonclasslist.length === 0) {
      this.buttonclasslist = ['sb-icon-button', 'sb-medium-size-button', 'sb-circle-type-button', 'sb-default-button'];
    }
  }

  onChanged() {
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.toggleIconLabelClass();
  }

  toggleIconLabelClass() {
    let switchButtonTypeClass = '';
    if ((this.checkedLabel && this.checked) || (this.uncheckedLabel && !this.checked)) {
      switchButtonTypeClass = 'sb-label-button';
    } else {
      switchButtonTypeClass = 'sb-icon-button';
    }
    this.buttonclasslist = this.buttonclasslist.filter((item) => item !== 'sb-label-button' && item !== 'sb-icon-button');
    this.buttonclasslist = [...this.buttonclasslist, switchButtonTypeClass];
  }

}
