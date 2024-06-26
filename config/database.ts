import Knex, { Knex as KnexType } from 'knex'
import config from '../knexfile'

const database: KnexType = Knex(config)

database.raw('select 1+1 as result').then(() => {
  console.log('======================== DATABASE CONNECTED! ========================')
}).catch(() => {
  console.log('======================== DATABASE DISCONNECTED! ========================')
})

export {
  database
}