import Rx from 'rxjs'

export default (item, index) => Rx.Observable.of([index, item])
