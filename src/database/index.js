import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const users = [];

const populateDB = (usersNumber) => {
  for (let i = 0; i < usersNumber; i++) {
    let firstName = faker.name.firstName();
    let pwd = faker.datatype.string(10);
    let random = Boolean(Math.round(Math.random() < 0.1));

    users.push({
      uuid: uuidv4(),
      name: firstName,
      email: faker.internet.email(firstName).toLowerCase(),
      password: bcrypt.hashSync(pwd, 10),
      isAdm: random,
      createdOn: faker.date.between(),
      updatedOn: faker.date.between(),
    });
  }
};

populateDB(10);

export default users;
