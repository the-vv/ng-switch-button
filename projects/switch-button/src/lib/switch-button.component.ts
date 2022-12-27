import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SwitchButtonSize, SwitchButtonType, SwitchLabelSlot } from './options';

@Component({
  selector: 'ng-switch-button',
  template: `
    <button
    [ngClass]="buttonclasslist">
      <ng-container *ngIf="labelSlot === 'left'">
        <ng-container *ngIf="checked">
          {{ checkedLabel }}
        </ng-container>
        <ng-container *ngIf="!checked">
          {{ uncheckedLabel }}
        </ng-container>
      </ng-container>
      <ng-container *ngIf="checked">
        <ng-container *ngIf="!checkedIcon">
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z"/></svg>
        </ng-container>        
        <ng-container *ngIf="checkedIcon">
          <i [ngClass]="checkedIcon"></i>
        </ng-container>
      </ng-container>
      <ng-container *ngIf="!checked">
        <ng-container *ngIf="!uncheckedIcon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="_01_align_center" data-name="01 align center"><polygon points="24 1.414 22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12 24 1.414"/></g></svg>
        </ng-container>
        <ng-container *ngIf="uncheckedIcon">
          <i [ngClass]="uncheckedIcon"></i>
        </ng-container>
      </ng-container>
      <ng-container *ngIf="labelSlot === 'right'">
        <ng-container *ngIf="checked">
          {{ checkedLabel }}
        </ng-container>
        <ng-container *ngIf="!checked">
          {{ uncheckedLabel }}
        </ng-container>
      </ng-container>
    </button>
  `,
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
  @Input() labelSlot: keyof typeof SwitchLabelSlot | SwitchLabelSlot = SwitchLabelSlot.right;

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
