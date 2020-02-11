export class User{
    id: number;
    name:string;
    username:string;
    email:string;
    constructor(i:number,nm:string,uname:string,e:string)
    {
        this.id=i;
        this.name=nm;
        this.username=uname;
        this.email=e;
    }
}