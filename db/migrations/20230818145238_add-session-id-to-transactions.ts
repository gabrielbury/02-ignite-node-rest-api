import { Knex } from 'knex'

const TABLE_NAME = 'transactions'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable(TABLE_NAME, (transactions) => {
    transactions.uuid('session_id').after('id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable(TABLE_NAME, (transactions) => {
    transactions.dropColumn('session_id')
  })
}
