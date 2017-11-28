
export class RegistrationCompany {
    constructor(
        public id: string,
        public company_name: string,
        public company_reg_no: string,
        public company_type: string,
        public phone_no: string,
        public company_email: string,
        public  fax_no: string,
        public address_1 : string,
        public address_2 : string, 
        public address_3 : string,
        public postal_code :string,
        public country_origin:string,
        public city:string,
        public modified_date:Date,
        public created_date:Date
    ){

    }
}
