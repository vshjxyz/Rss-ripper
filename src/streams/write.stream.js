import db from '../db'

export default (key, value) => {
  return db.flatMap((pool) =>
    pool.query('INSERT INTO news (id, value) VALUES ($1, $2) ON CONFLICT (id) DO UPDATE SET value=$2', [key, value])
  )
}
