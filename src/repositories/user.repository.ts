import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import * as bcrypt from "bcrypt";

interface IUserRepository {
  save: (user: User) => Promise<User>;
  findAll: () => Promise<Array<User>>;
  findOneBy: (payload: object) => Promise<User | null>;
  update: (id: string, payload: Partial<User>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class UserRepository implements IUserRepository {
  private repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  save = async (user: User) => await this.repo.save(user);

  findAll: () => Promise<User[]> = async () => await this.repo.find();

  findOneBy = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<User>) => {
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }

    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new UserRepository();
