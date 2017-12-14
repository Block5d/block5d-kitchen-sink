export class Workflow {
    constructor(
        public project_id: string,
        public from_status: string,
        public to_status:string,
        public rules:string,
        public action:string,
        public createdAt :Date,
        public modifiedAt:Date
    ){

    }
};
export class Status {
    constructor(
        public status_code: string,
        public status_desc: string
    ){

    }
}