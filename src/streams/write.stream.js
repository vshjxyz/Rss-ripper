import Rx from 'rxjs';
import db from '../db';

export default Rx.Observable.bindCallback(db.put.bind(db));
