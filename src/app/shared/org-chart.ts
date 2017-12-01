export class Person {
    constructor(
        public project_id: string,
        public selectmember: string,
        public reportingofficer: string,
    ) {

    }
}
export class Persondetail {
    constructor(
        public project_id: number,
        public person_id: number,
        public site_fax: number,
        public site_phone: number,
        public site_email: string,
        public parent_person_id: number,
        public modified_date: Date,
        public created_date: Date,
        public created_by: string,
        public modified_by: string,
    ) {

    }
}
