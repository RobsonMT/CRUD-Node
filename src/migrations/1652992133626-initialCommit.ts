import { MigrationInterface, QueryRunner } from "typeorm";

export class initialCommit1652992133626 implements MigrationInterface {
  name = "initialCommit1652992133626";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(20) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "createdOn" TIMESTAMP NOT NULL DEFAULT '"2022-05-19T20:28:55.580Z"', "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2022-05-19T20:28:55.580Z"', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" PRIMARY KEY ("uuid"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
