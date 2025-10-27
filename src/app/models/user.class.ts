export class User{


firstName:string;
lastName:string;
mailAddress:string;


constructor(obj?: any){

this.firstName = obj ? obj.firstName : '';
this.lastName = obj ? obj.lastName : '';
this.mailAddress = obj ? obj.mailAddress : '';
}
}