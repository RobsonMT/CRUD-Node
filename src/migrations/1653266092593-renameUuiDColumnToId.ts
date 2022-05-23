import { MigrationInterface, QueryRunner } from "typeorm";

export class renameUuiDColumnToId1653266092593 implements MigrationInterface {
    name = 'renameUuiDColumnToId1653266092593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "uuid" TO "id"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "PK_951b8f1dfc94ac1d0301a14b7e1" TO "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdOn" SET DEFAULT '"2022-05-23T00:34:54.812Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedOn" SET DEFAULT '"2022-05-23T00:34:54.813Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedOn" SET DEFAULT '2022-05-23 00:25:32.358'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdOn" SET DEFAULT '2022-05-23 00:25:32.358'`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" TO "PK_951b8f1dfc94ac1d0301a14b7e1"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "id" TO "uuid"`);
    }

}
