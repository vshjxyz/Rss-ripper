import Rx from 'rxjs'

export default (item) => {
  return Rx.Observable.of(item)
    .map(item => ([
      item['atom:id']['#'],
      {
        title: item['atom:title']['#'],
        content: item['atom:content']['#']
      }
    ]))
}
