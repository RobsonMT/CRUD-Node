import { DeleteResult, UpdateResult } from "typeorm";
import { User } from "../../entities";

export interface IUserRepository {
  save: (user: User) => Promise<User>;
  findAll: () => Promise<Array<User>>;
  findOneBy: (payload: object) => Promise<User | null>;
  update: (id: string, payload: Partial<User>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
