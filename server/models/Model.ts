module Model {
    export interface Identifiable {
        id?: string
    }

    export interface IUser extends Identifiable {
        email: string
        nome: string
        senha: string
        idade: number
    }
    
    export interface DAO<T extends Identifiable> {
        create(t: T): T
        find(id: string): T
        findAll(): T[]
        update(t: T): boolean
        delete(id: string): boolean
    }
}
