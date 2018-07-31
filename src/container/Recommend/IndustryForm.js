import React, { Component } from 'react';
import QuestionsStore from "../../stores/QuestionsStore";
import "../Users/CompanyEditForm.css"
import * as RecommendAction from "../../actions/RecommendAction.js";

class IndustryForm extends Component {

    sizeHandler(prop ,value){
      RecommendAction.postAnswer(prop,value);
    }
     
    render() {
      return (
        <div>
        <h3>Industry</h3>
          <form>
            <fieldset>
                <h3>What Industry is your business in</h3>
                <div>
                    <input onChange={()=> this.sizeHandler({'industry':'sales'})} type="radio" id="huey" name="drone" />
                    <label>Sales</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'industry':'consulting'})} type="radio" id="dewey" name="drone" />
                    <label>Consulting</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'industry':'cannabis'})} type="radio" id="louie" name="drone" />
                    <label>Cannabis</label>
                </div>
            </fieldset>
          </form>
      </div>
      );
    }
}
export default IndustryForm;