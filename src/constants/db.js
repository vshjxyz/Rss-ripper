import { parse } from 'pg-connection-string'

export default process.env.DATABASE_URL ? {
  ...parse(process.env.DATABASE_URL)
} : {
  database: 'rss_ripper_db',
  user: 'rss_ripper_user',
  host: 'localhost',
  port: 26257
}
