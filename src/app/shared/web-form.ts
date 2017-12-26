export class WebForm {
    constructor(
        public title: string,
        public name: string,
        public display_as:string,
        public createdAt:Date,
        public modifiedAt:Date,
        public content:Array<string>
    ){

    }
}
