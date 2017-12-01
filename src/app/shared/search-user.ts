export class SearchUsrCriteria {
    constructor(
        public keyword: string,
        public sortBy: string,
        public currentPerPage: number,
        public itemsPerPage: number
    ){

    }
}
 