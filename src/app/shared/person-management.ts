export class PersonManagement {
    constructor(
        public first_name: string,
        public last_name: string,
        public job_title: string,
        public contact_no:number,
        public email:string, 
        public dateOfBirth: Date,
        public gender: string,
        public postal_code:number,
        public address:string,
        public city: string,
        public provider_type: string,
        public firebase_user_uid:string,
        public modified_date: Date,
        public created_date: Date,
        public created_by:string,
        public modified_by:string
    ){

    }
}

export class SearchPerson {
    constructor(
        public keyword: string,
        public type:string
    ){

    }
}