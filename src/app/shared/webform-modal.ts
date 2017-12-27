export class WebformTextField {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        validation:object
    ) { }
}

export class WebformNumber {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        validation:object
    ) { }
}

export class WebformPassword {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        validation:object
    ) { }
}

export class WebformTextArea {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        rows: number,
        validation:object
    ) { }
}

export class WebformCheckBox {
    constructor(
        label: string,
        validation:object
    ) { }
}

export class WebformSelectBoxes {
    constructor(
        label: string,
        selectBoxesValues:Array<string>,
        validation:object
    ) { }
}

export class WebformSelect {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        selectValues:Array<string>,
        validation:object
    ) { }
}

export class WebformRadio {
    constructor(
        label: string,
        radioValues:Array<string>,
        validation:object
    ) { }
}

export class WebformHtmlElement {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        validation:object
    ) { }
}

export class WebformButton {
    constructor(
        label: string,
        action: string,
        theme: string,
        size: string,
        validation:object
    ) { }
}

export class WebformDatePicker {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        validation:object
    ) { }
}


export class WebformTimePicker {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        validation:object
    ) { }
}


export class AddValueModel {
    desc = '';
    value = '';
}

export class SelectBoxesValue{
    label = '';
    value = '';
}

export class Select {
    id = 0;
    selectModels: AddValueModel[];
  }
  