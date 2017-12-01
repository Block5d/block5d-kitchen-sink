export class ProjectSubmission {
    constructor(
        public description: string,
        public authority: string,
        public project_id: string,
        public planned_submission_date: Date,
        public first_submission_date: Date,
        public second_submission_date: Date,
        public type: string,
        public status: string,
        public modified_date:Date,
        public created_date:Date
    ){

    }
}
