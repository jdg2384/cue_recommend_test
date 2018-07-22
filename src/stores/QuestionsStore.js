import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class QuestionsStore extends EventEmitter {
  constructor () {
    super()
    this.state = {
        size:'blah',
        industry:'',
        price:'',
        features:[]
    }
  }

  getState(){
      return this.state
  }
  
  handleActions(action) {
    const { size, industry, price, feature } = this.state
    // console.log('before switch', this.state)
    switch (action.type) {
      case 'POST_ANSWER': {
        this.state.size = action.data.value.size
        this.emit('post_answer')
        break
      }
    }
    // console.log('after switch', this.state)
  }
}

const questionsStore = new QuestionsStore()
dispatcher.register(questionsStore.handleActions.bind(questionsStore))
export default questionsStore
