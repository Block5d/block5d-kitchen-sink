
export class UserGroup {
    constructor(
        public project_id: string,
        public group_name: string,
        public members:string,
        public createdAt:Date,
        public modifiedAt:Date
    ){

    }
}
export class UserGroupSearch {
    constructor(
        public keyword: string,
        public condition: string
    ){

    }
}