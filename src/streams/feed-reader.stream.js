import Rx from 'rxjs';
import Feedparser from 'feedparser';
import request from 'request';

export default url => Rx.Observable.create((observer) => {
  request(url).on('response', function (res) {
    const stream = this;
    const feedparser = new Feedparser();

    if (res.statusCode !== 200) {
      return observer.error('Bad response');
    }

    stream.pipe(feedparser);

    feedparser.on('readable', function () {
      const stream = this;
      let item;

      while (item = stream.read()) {
        observer.next(item);
      }
    });

    feedparser.on('end', () => observer.complete());

    feedparser.on('error', (err) => observer.error(err));
  });
});
