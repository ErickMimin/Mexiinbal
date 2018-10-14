export class User{
    user:'';
    pass:'';
    email:'';
    constructor(){}
    public setData (data:any) : void {
        let keys = Object.keys(data);
        for(let key of keys){
            this[key]=data[key];
        }
    }
}