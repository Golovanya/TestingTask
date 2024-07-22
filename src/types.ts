export type User = {
    id:number,
    firstName:string,
    lastName:string,
    age:string, 
    phone:string
    gender:string,
    address:{
        address:string,
        city:string
    }
}

export type Users = User[]

export type Task = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
  };