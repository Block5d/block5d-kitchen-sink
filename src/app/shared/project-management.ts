export class ProjectManagement{
    constructor(
        public name:string,
        public start_date:Date,
        public end_date:Date,
        public client_company:string,
        public project_manager_person:string,
        public architect_person:string,
        public design_architect_person:string,
        public quantity_surveyor_person:string,
        public cs_engineer_person:string,
        public service_engineer_person:string,
        public main_contractor_company:string,
        public subcontractors:Array<number>,
        public suppliers:Array<string>,
        public contact_no:number,
        public company_email:string,
        public fax_no:number,
        public project_country:string,
        public site_possession:string,
        public completion_date:Date,
        public contract_currency:string,
        public contract_sum:number,
        public contract_duration_base:Date,
        public contract_duration_remaining:Date,
        public pct_work_done:number,
        public remarks:string,
        public site_issues:string,   
        public desc:string,
        public planned_start_date:Date,
        public actual_start_date:Date,
        public planned_end_date:Date,
        public actual_end_date:Date,
        public pct_completed_planned: number,
        public pct_completed_actual:number,
        public pct_completed_1wktarget:number,
        public remark:string,
        public modified_date: Date,
        public created_date: Date,
        public created_by:string,
        public modified_by:string

    ){

    }
}

export class SearchProject {
    constructor(
        public keyword: string,
        public type:string
    ){

    }
}