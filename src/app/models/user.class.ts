export class User{


firstName:string;
lastName:string;
mailAddress:string;
zipCode:string;
city:string;


constructor(obj?: any){

this.firstName = obj ? obj.firstName : '';
this.lastName = obj ? obj.lastName : '';
this.mailAddress = obj ? obj.mailAddress : '';
this.zipCode =  obj ? obj.mailAddress : '';
this.city =  obj ? obj.mailAddress : '';
}
}