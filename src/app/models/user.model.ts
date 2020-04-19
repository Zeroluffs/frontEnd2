export class User {
    $key: string;
    userName: string;
    documentType: string; 
    documentID : number;
    userEmail :string;
    enterpriseImg : File;
    enterpriseName: string;
    userPhone: number;
    password: string;
    access?: boolean = true;
}

