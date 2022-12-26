export enum SwitchButtonType {
    /** rounded button */
    rounded = 'rounded',
    /** square button */
    square = 'square',
    /** circle button */
    circle = 'circle'
}

export enum SwitchButtonSize {
    /** small button */
    small = 'small',
    /** medium button */
    medium = 'medium',
    /** large button */
    large = 'large'
}


export interface SwitchButtonOptions {
    /** type of button to show */
    type?: SwitchButtonType;
    /** disable state of button */
    disabled?: boolean;
    /** color of button */
    color?: string;
    /** size of button */
    size?: 'small' | 'medium' | 'large';
    /** label to show when checked */
    checkedLabel?: string;
    /** label to show when unchecked */
    uncheckedLabel?: string;
    /** state of button */
    checked?: boolean;
    /** icon to show when checked */
    checkedIcon?: string;
    /** icon to show when unchecked */
    uncheckedIcon?: string;
}

export class MSwitchButtonOptions implements SwitchButtonOptions {
    type = SwitchButtonType.circle;
    disabled = false;
    color = '#3f51b5';
    size = SwitchButtonSize.medium;
    checkedLabel = '';
    uncheckedLabel = '';
    checked = false;
    checkedIcon = '';
    uncheckedIcon = '';

    constructor(options?: SwitchButtonOptions) {
        if (!options) {
            return;
        }
        Object.assign(this, options);
    }

}