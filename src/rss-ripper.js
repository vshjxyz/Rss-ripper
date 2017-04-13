import feedReaderStream from './streams/feed-reader.stream'
import cockroachDbWriteStream from './streams/write.stream'
import passThroughTransformer from './transformers/pass-through'

class RssRipper {
  constructor (extractor = passThroughTransformer) {
    this.extractor = extractor
  }

  rip (url) {
    return feedReaderStream(url)
      .flatMap(this.extractor)
      .flatMap(([id, item]) =>
        cockroachDbWriteStream(id, item)
          .map(() => [url, id, item])
      )
  }
}

export default RssRipper
