import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class CompanyStore extends EventEmitter {
  constructor () {
    super()
    this.user = 'bro'
    this.users = []
    this.text = ''
  }
  
  getUser () {
    return this.user
  }

  getText(){
    return this.text
  }

  allUsers(){
    return this.users
  }
  
  handleActions(action) {
    switch (action.type) {
      case 'RECEIVE_USER': {
        console.log('store user')
        this.user = action.data
        this.emit('new_user')
        console.log('emit', this.emit('new_user'))
        break
      }
      case 'RECEIVE_TEXT': {
        console.log('store text', action.data)
        this.text = action.data
        this.emit('new_text')
        break
      }
      case 'RECEIVE_INFO': {
        this.users = action.data
        this.emit('all_users')
        break
      }
    }
  }
}

const companyStore = new CompanyStore()
dispatcher.register(companyStore.handleActions.bind(companyStore))
export default companyStore
