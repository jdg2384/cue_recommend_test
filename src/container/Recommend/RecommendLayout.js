import React, { Component } from 'react';
import QuestionsStore from "../../stores/QuestionsStore";
import "../Users/CompanyEditForm.css"
import * as RecommendAction from "../../actions/RecommendAction.js";
import IndustryForm from './IndustryForm'
import PriceForm from './PriceForm'

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

  renderQuestions(){
    console.log('renderQuestion fn = ',!this.state.answer.size)
    if(!this.state.answer.size){
      return <IndustryForm/>
    }
    else{
      return <PriceForm/>
    }
  }

  render() {
    const { answer } = this.state
      return (
        <div className="recommend-bg">
          {this.renderQuestions()}
        </div>
      );
    }
}
export default RecommendLayout;

