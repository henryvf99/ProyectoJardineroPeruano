export interface Departamento{
    id:number;
    name:string;
}

export interface Provincia{
    id:number,
    departamentoID:number;
    name:string
}

export interface Distrito{
    id:number;
    provinciaID:number;
    name:string;
}