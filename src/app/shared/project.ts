
export class ProjectGroup {
    constructor(
        public project_id: string,
        public group_name: string,
        public members:Array<string>,
        public createdAt:Date,
        public modifiedAt:Date
    ){

    }
}
