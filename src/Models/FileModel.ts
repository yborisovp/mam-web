export interface IFileModel {
    file: File;
    filePath: string;
    fileType: number;
}

export class FileModel implements IFileModel {
    
    file: File;
    filePath: string;
    fileType: number;

    constructor(file: File, fileType: number, filePath: string) {
        this.file = file
        this.fileType = fileType
        this.filePath = filePath;
      }

}
