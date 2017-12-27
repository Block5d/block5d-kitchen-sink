export class WebformTextField {
    constructor(
        public label: string,
        public placeholder: string,
        public description: string,
        public validation: object
    ) { }
}

export class WebformNumber {
    constructor(
        public label: string,
        public placeholder: string,
        public description: string,
        public validation: object
    ) { }
}

export class WebformPassword {
    constructor(
        public label: string,
        public placeholder: string,
        public description: string,
        public validation: object
    ) { }
}

export class WebformTextArea {
    constructor(
        public label: string,
        public placeholder: string,
        public description: string,
        public rows: number,
        public validation: object
    ) { }
}

export class WebformCheckBox {
    constructor(
        public label: string,
        public validation: object
    ) { }
}

export class WebformSelectBoxes {
    constructor(
        public label: string,
        public selectBoxesValues: Array<string>,
        public validation: object
    ) { }
}

export class WebformSelect {
    constructor(
        public label: string,
        public placeholder: string,
        public description: string,
        public selectValues: Array<string>,
        public validation: object
    ) { }
}

export class WebformRadio {
    constructor(
        public label: string,
        public radioValues: Array<string>,
        public validation: object
    ) { }
}

export class WebformHtmlElement {
    constructor(
        public label: string,
        public placeholder: string,
        public description: string,
        public validation: object
    ) { }
}

export class WebformButton {
    constructor(
        public label: string,
        public action: string,
        public theme: string,
        public size: string,
        public validation: object
    ) { }
}

export class WebformDatePicker {
    constructor(
        public label: string,
        public placeholder: string,
        public description: string,
        public validation: object
    ) { }
}


export class WebformTimePicker {
    constructor(
        public label: string,
        public placeholder: string,
        public description: string,
        public validation: object
    ) { }
}


export class AddValueModel {
    public desc = '';
    public value = '';
}

export class SelectBoxesValue {
    public label = '';
    public value = '';
}

export class Select {
    public id = 0;
    public selectModels: AddValueModel[];
}
