import bayes from 'bayes'
import readStream from './streams/read.stream'

const classifier = bayes()

export default () => {
  readStream
  .do(item => classifier.learn(item.value.title || item.value.content, item.value.label))
  .subscribe(
    () => {},
    (err) => console.error(err),
    () => {
      console.log(classifier.categorize(' il nuovo aumento è stato già deciso, e non è roba da poco'))
    }
  )
}
