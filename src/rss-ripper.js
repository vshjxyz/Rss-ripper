import feedReaderStream from './streams/feed-reader.stream';
import levelDbWriteStream from './streams/write.stream';
import passThroughTransformer from './transformers/pass-through';
import Feedparser from 'feedparser';
import Rx from 'rxjs';

const parser = new Feedparser();

class RssRipper {
  constructor(extractor = passThroughTransformer) {
    this.extractor = extractor;
  }

  rip(url) {
    return feedReaderStream(url)
      .flatMap(this.extractor)
      .flatMap(([id, item]) =>
        levelDbWriteStream(id, item)
          .map(() => [url, id, item])
      );
  }
}

export default RssRipper;
