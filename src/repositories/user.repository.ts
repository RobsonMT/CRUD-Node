import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { IUserRepository } from "../interfaces";
import { User } from "../entities";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  save = async (user: User) => await this.repository.save(user);

  findAll: () => Promise<Array<User>> = async () =>
    await this.repository.find();

  findOneBy = async (payload: object) => {
    return await this.repository.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<User>) => {
    return await this.repository.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repository.delete(id);
}

export default new UserRepository();
