import ITokens from "./token.interface"

export default interface IUser {
    name:{
        first:string,
        last:string,
    },
    gender:string,
    email:string,
    picture: string,
    uuid:string,
    login: {
        username:string,
        password:string,
    },
    role:string,
    dob: {
        date:string,
        age:number
    },
    registered_date: string,
    phone: string,
    job:string,
    contract?: {
        document:string,
        startDate:string,
    }
    payment?:number,
    work?: {
        hours:number,
        sheduel:{
            date:string,
            hours: {
                startHour:string,
                endHour:string, 
                full:number
            }
        }[]
    }
    token?: ITokens
    ban?: {
        isBaned:boolean,
        banDate?:string
    }
}
