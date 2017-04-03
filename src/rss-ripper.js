import feedReaderStream from './streams/feed-reader.stream'
import levelDbWriteStream from './streams/write.stream'
import passThroughTransformer from './transformers/pass-through'

class RssRipper {
  constructor (extractor = passThroughTransformer) {
    this.extractor = extractor
  }

  rip (url) {
    return feedReaderStream(url)
      .flatMap(this.extractor)
      .flatMap(([id, item]) =>
        levelDbWriteStream(id, item)
          .map(() => [url, id, item])
      )
  }
}

export default RssRipper
