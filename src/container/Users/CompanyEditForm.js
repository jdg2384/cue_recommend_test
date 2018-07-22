// import React, { Component } from 'react';
// import * as CompanyActions from "../../actions/CompanyAction.js";
// import CompanyStore from "../../stores/CompanyStore";
// import "./CompanyEditForm.css"

// class CompanyEditForm extends Component {
//     constructor(props) {
//       super(props);
//       console.log('constructor')
//       this.getUser = this.getUser.bind(this);
//       this.getText = this.getText.bind(this);
//       this.allUsers = this.allUsers.bind(this);
//       CompanyActions.updateAllUsers()
//       this.state={
//         user: '',
//         text: ''
//       }
//     }
      
//     componentWillMount() {
//       console.log('ComponentWillMount')
//       CompanyStore.on("new_user", this.getUser);
//       CompanyStore.on("new_text", this.getText);
//       CompanyStore.on("all_users", this.allUsers);
//     }

//     componentWillUnmount(){
//       console.log('ComponentWillUnMount')
//       CompanyStore.removeListener("new_user", this.getUser);
//       CompanyStore.on("new_text", this.getText);
//       CompanyStore.removeListener("all_users", this.allUsers); 
//     }
//     // What is the term for these functions??
//     getUser() {
//       console.log('get user')
//       this.setState({user: CompanyStore.getUser()});
//     }

//     getText(){
//       this.setState({text: CompanyStore.getText()});
//     }

//     allUsers(){
//       console.log('All users')
//       this.setState({users: CompanyStore.allUsers()});
//     }

//     onSubmit(value){
//       console.log('onSubmit fn')
//       CompanyActions.updateUser(value);
//     }

//     onChangeText(value){
//       console.log('onChangeText fn')
//       CompanyActions.updateText(value);
//     }

//     render() {
//       const { user, users } = this.state;
//       console.log('Render');
//       return (
//         <div className="bg">
//           <h2>{ user || "New User"}</h2>
//           <br/>
//           <form>
//             <label>
//               Name:
//               <input type="text" placeholder="Username" onChange={(event)=> this.onSubmit(event.target.value)} />
//               <br/>
//             </label>
//             Text:
//             {/* <input type="text" placeholder="name" onChange={(event)=> this.onChangeText(event.target.value)} /> */}
//           </form>
//           <div className="container_one">
//             <div className="box1">
//               <h3>Box 1</h3>
//               <p>P tag y'all</p>
//             </div>
//             <div className="box2">
//               <h3>Box 2</h3>
//               <p>P tag y'all</p>
//             </div>
//             <div className="box3">
//               <h3>Box 3</h3>
//               <p>P tag y'all</p>
//             </div>
//           </div>
//         </div>
//       );
//     }
// }
// export default CompanyEditForm;

