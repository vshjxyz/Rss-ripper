import DB_CONFIG from '../constants/db'
import Rx from 'rxjs'
import pg from 'pg'

console.log('Trying to connect using ', JSON.stringify(DB_CONFIG))

const pool = new pg.Pool(DB_CONFIG)

pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack)
})

export default Rx.Observable.fromPromise(
  pool.query('CREATE TABLE IF NOT EXISTS news (id VARCHAR(250) PRIMARY KEY, value text);')
).map(() => pool)
