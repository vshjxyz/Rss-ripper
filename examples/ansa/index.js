import URLS from './constants/urls'
import SHARED from './constants/shared'
import ansaTransformer from './transformers/ansa'
import RssRipper from '../../src/rss-ripper'
import Rx from 'rxjs'

export default () => {
  let mainStream = Rx.Observable.empty()
  const ansaRipper = new RssRipper(ansaTransformer)

  mainStream = mainStream.concat(
    Rx.Observable.from(URLS)
      .delay(SHARED.DELAY)
      .flatMap((url) => ansaRipper.rip(url))
  )

  mainStream.subscribe(([url, id, item]) => {
    console.log(`(Page ${url}) - ripped item with ID ${id}`)
  }, (err) => {
    console.error('errrror', err)
  })
}
