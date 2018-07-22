import React, { Component } from 'react';
import QuestionsStore from "../../stores/QuestionsStore";
import "../Users/CompanyEditForm.css"
import * as RecommendAction from "../../actions/RecommendAction.js";
import IndustryForm from './IndustryForm'

class RecommendLayout extends Component {
    constructor(props) {
      super(props);
      this.getState = this.getState.bind(this);
      this.state = {
        answer:[]
      }
    }
      
    componentWillMount(){
       QuestionsStore.on("post_answer", this.getState);
    }

    getState(){
      this.setState({answer: QuestionsStore.getState()});
    }

  
  render() {
    console.log('render', this.state)
      return (
        <div className="recommend-bg">
          <IndustryForm/>
        </div>
      );
    }
}
export default RecommendLayout;

