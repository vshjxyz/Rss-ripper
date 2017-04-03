import Rx from 'rxjs';
import request from 'request';

export default Rx.Observable.bindCallback(request.bind(request));
