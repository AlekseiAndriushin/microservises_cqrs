import { MigrationInterface, QueryRunner } from "typeorm";

export class PostCreateTestMigration1682976861403 implements MigrationInterface {
    name = 'PostCreateTestMigration1682976861403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "posts" ("id" uuid NOT NULL, "title" character varying NOT NULL, "message" character varying NOT NULL, "author_id" character varying NOT NULL, "is_published" boolean NOT NULL, "created_at" character varying NOT NULL, "updated_at" character varying NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "posts"`);
    }

}
