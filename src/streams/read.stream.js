import Rx from 'rxjs'
import db from '../db'

export default Rx.Observable.create((observer) => {
  db.createReadStream()
    .on('data', (data) => observer.next(data))
    .on('error', (err) => observer.error(err))
    .on('end', () => observer.complete())
  return observer
})
