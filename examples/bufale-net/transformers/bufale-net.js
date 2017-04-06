import Rx from 'rxjs'
import KEYWORDS from '../constants/keywords'

export default (item) => {
  return Rx.Observable.of(item)
    .filter(item => {
      return KEYWORDS.bufaleNet.reduce((check, keyword) => {
        const query = new RegExp(`^${keyword}`, 'i')
        return check || query.test(item['atom:title']['#'])
      }, false)
    })
    .map(item => ([
      item['atom:id']['#'],
      {
        title: item['atom:title']['#'],
        summary: item['atom:summary']['#'],
        label: 'fake news'
      }
    ]))
}
