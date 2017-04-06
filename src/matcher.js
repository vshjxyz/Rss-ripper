import bayes from 'bayes'
import readStream from './streams/read.stream'

const classifier = bayes()

export default () => {
  readStream
  .do(item => item.value.label === 'news' ? classifier.learn(item.value.title, 'news') : null)
  .do(item => item.value.label === 'fake news' ? classifier.learn(item.value.title, 'fake') : null)
  .subscribe(
    () => {},
    () => {},
    () => {
      console.log(classifier.categorize(' il nuovo aumento è stato già deciso, e non è roba da poco'))
    }
  )
}
