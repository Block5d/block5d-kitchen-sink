export class ProjectMembers{
    constructor(
        public project_id:string,
        public person_id:string,
        public company_id:string,
        public isEnabled:boolean,
        public modified_date:Date,
        public created_date:Date,
        public created_by:string,
        public modified_by:string
    ){

    }
}