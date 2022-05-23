import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { compare } from "bcrypt";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 20 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdm?: boolean;

  @Column({ default: new Date() })
  createdOn: Date;

  @Column({ default: new Date() })
  updatedOn: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  comparePwd = async (recievedPwd: string): Promise<boolean> => {
    return await compare(recievedPwd, this.password);
  };
}
