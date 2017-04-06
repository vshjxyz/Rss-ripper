import Rx from 'rxjs'

export default (item) => {
  return Rx.Observable.of(item)
    .map(item => {
      return [
        item['rss:guid']['#'],
        {
          title: item['rss:title']['#'],
          content: item['rss:description']['#'],
          label: 'news'
        }
      ]
    })
}
