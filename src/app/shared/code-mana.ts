export class AddCodeMana {
    constructor(
        public _id: Number,
        public code_details: {
            code_desc: String,
            code: String
        },
        public category_details: {
            categoryDesc: string,
            categoryCode: object
        },
        public is_category: Boolean,
        public modified_date: Date,
        public created_date: Date,
        public created_by: String,
        public modified_by: String,
        public parent_id: String
    ) {

    }
}
export class AddCategory {
    constructor(
        public categoryDesc: String,
        public categoryCode: any,
        public is_category: Boolean
    ) {
    }
}