export interface IUser {
    id: number,
    name: string,
    fullName?: string,
    email: string,
    password: string,
    cpf?: string,
    dateOfBirth?: string
}

export interface IAddress {
    id: number,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string
}