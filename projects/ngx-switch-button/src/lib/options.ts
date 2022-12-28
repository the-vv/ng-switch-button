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

export enum SwitchLabelSlot {
    /** align text left side of icon */
    left = 'left',
    /** align text right side of icon */
    right = 'right'
}

export interface MultiStageButtonOptions {
    /** button size */
    size?: keyof typeof SwitchButtonSize | SwitchButtonSize;
    /** button type */
    type?: keyof typeof SwitchButtonType | SwitchButtonType;
    /** button label slot */
    labelSlot?: keyof typeof SwitchLabelSlot | SwitchLabelSlot;
    /** button class list */
    classList?: string;
    /** button disabled */
    disabled?: boolean;
    /** button checked */
    loading?: boolean;
    /** stages list */
    stages: MultiStageButtonStage[];

}

export interface MultiStageButtonStage {
    /** text of the stage */
    text: string;
    /** icon of the stage */
    icon?: string;
    /** text color of the stage */
    textColor?: string;
    /** background color of the stage */
    backgroundColor?: string;
    /** value of the stage */
    value: any;
    /** class list specifically for this stage */
    classList?: string;
}