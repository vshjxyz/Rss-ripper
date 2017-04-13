import db from '../db'

export default (key, value) => {
  return db.flatMap((pool) =>
    pool.query('UPSERT INTO news (id, value) VALUES ($1, $2)', [key, value])
  )
}
