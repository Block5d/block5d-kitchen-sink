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

export class SearchProjectMembers {
    constructor(
        public keyword: string,
        public type:string,
        public currentPerPage: number,
        public itemsPerPage: number
    ){

    }
}