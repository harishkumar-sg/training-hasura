import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class address1660284093251 implements MigrationInterface {

    private readonly tableName = "address";
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "pincode",
            type: "varchar",
            isNullable: true,
            isUnique: false,
          },
          {
            name: "house_no",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "city",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamptz",
            isNullable: false,
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamptz",
            isNullable: false,
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }

}
