import React, { Component } from 'react';
import QuestionsStore from "../../stores/QuestionsStore";
import "../Users/CompanyEditForm.css"
import * as RecommendAction from "../../actions/RecommendAction.js";

class PriceForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          size:'',
          industry:'',
          price:'',
          features:[]
        }
      }

    sizeHandler(prop ,value){
      RecommendAction.postAnswer(prop,value);
    }

    renderQuestion(){
      return (
      <div>
        <h3>price</h3>
      </div>
      )
    }
      


    

    render() {
      return (
        <div className="recommend-bg">
          {this.renderQuestion()}
          {/* <button onClick={()=> RecommendAction.postAnswer('what what')}>Submit</button> */}
        </div>
      );
    }
}
export default PriceForm;