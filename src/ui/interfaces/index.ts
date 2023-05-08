export interface IUser {
    id: number,
    name: string,
    fullName?: string,
    email: string,
    password: string,
    cpf?: string,
    dateOfBirth?: string
}