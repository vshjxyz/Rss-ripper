import { parse } from 'pg-connection-string'
import fs from 'fs'

export default process.env.ROACHR_URL ? {
  ...parse(process.env.ROACHR_URL),
  database: 'rss_ripper_db',
  ssl: {
    key: fs.readFileSync('./root.key'),
    cert: fs.readFileSync('./root.cert')
  }
} : {
  database: 'rss_ripper_db',
  user: 'rss_ripper_user',
  host: 'localhost',
  port: 26257
}
