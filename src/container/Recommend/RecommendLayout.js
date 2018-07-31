import React, { Component } from 'react';
import QuestionsStore from "../../stores/QuestionsStore";
import "../Users/CompanyEditForm.css"
import * as RecommendAction from "../../actions/RecommendAction.js";
// Forms
import SizeForm from './SizeForm';
import PriceForm from './PriceForm';
import IndustryForm from './IndustryForm';
import FeaturesForm from './FeaturesForm';
import BaseSuzie from './BaseSuzie'

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
    if(!this.state.answer.size){
      return <SizeForm/>
    }
    else if (!this.state.answer.price){
      return <PriceForm/>
    }
    else if (!this.state.answer.industry){
      return <IndustryForm/>
    }
    else{
      return <FeaturesForm/>
    }
  }

  render() {
    console.log('state', this.state)
      return (
        <div className="recommend-bg">
          {/* {this.renderQuestions()} */}
          <BaseSuzie />
        </div>
      );
    }
}
export default RecommendLayout;

