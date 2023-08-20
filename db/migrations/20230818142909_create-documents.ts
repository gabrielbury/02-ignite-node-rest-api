import { Knex } from 'knex'

const TABLE_NAME = 'transactions'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (transactions) => {
    transactions.uuid('id').primary()
    transactions.text('title').notNullable()
    transactions.decimal('amount', 10, 2).notNullable()
    transactions.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME)
}
