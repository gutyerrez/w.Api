import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsersController {

  public async index() {
    const users = Database.from('users')
      .select('*')

    return users
  }

  public async store() {
    // TODO not implemented-yet
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params;

    console.log(id);

    const user = Database.from('users')
      .select('*')
      .where('id', id)
      .first();

    return user;
  }

  public async update() {
    // TODO not implemented-yet
  }
  
}