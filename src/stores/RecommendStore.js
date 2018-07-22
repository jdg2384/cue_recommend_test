import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class RecommendStore extends EventEmitter {
  constructor () {
    super()
    // this.companies = [
    //     {
    //         name:'Acronis',
    //         industry:'Accounting',
    //         size_for:'small, medium, large',
    //         price:1.99,
    //     },
    //     {
    //         name:'Base CRM',
    //         industry:'sale',
    //         size_for:'medium,large',
    //         price:45,
    //     },
    //     {
    //         name:'Carbonite',
    //         industry:'Security',
    //         size_for:'small, medium, large',
    //         price:20,
    //     },
    //     {
    //         name:'Constant Contact',
    //         industry:'Marketing',
    //         size_for:'small, medium, large',
    //         price:0,
    //     },
    //     {
    //         name:'Duda',
    //         industry:'Sales',
    //         size_for:'small',
    //         price:20,
    //     },
    // ]
  }

//   getCompanies(){
//       return this.companies
//   }
  
  handleActions(action) {
    // console.log('Store', action)
    // switch (action.type) {
    //   case 'All_COMPANIES': {
    //     this.companies = this.companies
    //     this.emit('all_companies')
    //     break
    //   }
    // }
  }
}

const recommendStore = new RecommendStore()
dispatcher.register(recommendStore.handleActions.bind(recommendStore))
export default recommendStore
