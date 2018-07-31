import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class QuestionsStore extends EventEmitter {
  constructor () {
    super()
    this.state = {
        size:'',
        industry:'',
        price:'',
        features:[]
    }
  }

  getState(){
      return this.state
  }
  
  handleActions(action) {
    switch (action.type) {
      case 'POST_ANSWER': {
        this.state = Object.assign({}, this.state ,action.data.value)
        this.emit('post_answer')
        break
      }
    }
    // console.log('after switch', action.data.value)
  }
}

const questionsStore = new QuestionsStore()
dispatcher.register(questionsStore.handleActions.bind(questionsStore))
export default questionsStore
