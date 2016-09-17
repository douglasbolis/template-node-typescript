/// <reference path="Model.ts" />
import shortid = require('shortid')
import _ = require('lodash')

/**
 * Model para os usuários
 * 
 * @class User
 * @implements {Model.DAO<Model.IUser>}
 */
export class User implements Model.DAO<Model.IUser> {

    /**
     * Objeto de teste para armazenar os usuários criados
     * 
     * @private
     * @type {{ [id: string]: Model.IUser }}
     */
    private users: { [id: string]: Model.IUser }

    /**
     * Creates an instance of User.
     * 
     */
    constructor() {
        this.users = { }
    }

    /**
     * Cria um novo usuário com os dados do parametro
     * 
     * @param {Model.IUser} user
     * @returns
     */
    create(user: Model.IUser) {
    // gerando o id para o usuário
        user.id = shortid.generate()        
    // armazenando em users [objeto de teste]
        this.users[user.id] = user
        return user
    }

    /**
     * Busca o usuário com o id do parametro
     * 
     * @param {string} id
     * @returns
     */
    find(id: string) {
        return this.users[id]
    }

    /**
     * Busca todos os usuários
     * 
     * @returns
     */
    findAll() {
        return _.values(this.users)
    }

    /**
     * Atualiza os dados do usuário
     * 
     * @param {Model.IUser} user
     * @returns
     */
    update(user: Model.IUser) {
        if (this.users[user.id] === null) {
            return false
        }

        this.users[user.id] = user
        return true
    }

    /**
     * Delete o usuário com o id do parametro
     * 
     * @param {string} id
     * @returns
     */
    delete(id: string) {
        if (this.users[id] === null) {
            return false
        }
        
        delete this.users[id]
        return true
    }
}
