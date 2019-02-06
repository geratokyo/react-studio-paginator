
export interface iActionType{
    type:number, 
    data:any|any[],
}

export interface Dictionary<T>{
	[idx:string]:T;
}
