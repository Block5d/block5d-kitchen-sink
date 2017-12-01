export class AddCodeMana {
    constructor(
        public _id: Number,
        public code_desc: String,
        public code: String,
        public categoryDesc: String,
        public categoryCode: String,
        public is_category: Boolean,
        public modified_date: Date,
        public created_date: Date,
        public created_by: String,
        public modified_by: String,
        public parent_id: String
    ) {

    }
}
export class SearchCodeMana {
    constructor(
        public keyword: String,
        public type: String
    ) {

    }
}
export class AddCategory {
    constructor(
        public categoryDesc: String,
        public categoryCode: String,
        public is_category: Boolean
    ) {
    }
}