export class Fileupload {
    constructor(
        public fileName: string,
        public cloudFileId: string,
        public size: number,
        public fileUrl: string,
        public fileType: string,
    ){

    }
}
