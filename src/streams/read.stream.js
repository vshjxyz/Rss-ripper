import Rx from 'rxjs'
import db from '../db'

export default db.flatMap((pool) =>
  Rx.Observable.fromPromise(pool.query('SELECT * FROM news'))
    .flatMap((result) =>
      Rx.Observable.from(result.rows)
        .map((item) => ({
          id: item.id,
          value: JSON.parse(item.value)
        }))
    )
)
