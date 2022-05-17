import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

interface IUser {
  uuid: string;
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  createdOn: Date;
  updatedOn: Date;
}

const users: Array<IUser> = [];

const populateDB = (usersNumber: number) => {
  for (let i = 0; i < usersNumber; i++) {
    let firstName = faker.name.firstName();
    let pwd = faker.datatype.string(10);
    let random = faker.datatype.boolean();

    users.push({
      uuid: uuidv4(),
      name: firstName,
      email: faker.internet.email(firstName).toLowerCase(),
      password: bcrypt.hashSync(pwd, 10),
      isAdm: random,
      createdOn: new Date(),
      updatedOn: new Date(),
    });
  }
};

populateDB(10);

export { users, IUser };
