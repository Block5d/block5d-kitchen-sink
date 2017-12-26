export class WebformTextField {
    constructor(
        label: string,
        placeholder: string,
        description: string
    ) { }
}

export class WebformNumber {
    constructor(
        label: string,
        placeholder: string,
        description: string
    ) { }
}

export class WebformPassword {
    constructor(
        label: string,
        placeholder: string,
        description: string
    ) { }
}

export class WebformTextArea {
    constructor(
        label: string,
        placeholder: string,
        description: string,
        rows: number
    ) { }
}

export class WebformCheckBox {
    constructor(
        label: string
    ) { }
}

export class WebformSelectBoxes {
    constructor(
        label: string
    ) { }
}

export class WebformSelect {
    constructor(
        label: string,
        placeholder: string,
        description: string
    ) { }
}

export class WebformRadio {
    constructor(
        label: string
    ) { }
}

export class WebformHtmlElement {
    constructor(
        label: string,
        placeholder: string,
        description: string
    ) { }
}

export class WebformButton {
    constructor(
        label: string,
        action: string,
        theme: string,
        size: string
    ) { }
}

export class WebformDatePicker {
    constructor(
        label: string,
        placeholder: string,
        description: string
    ) { }
}


export class WebformTimePicker {
    constructor(
        label: string,
        placeholder: string,
        description: string
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
  