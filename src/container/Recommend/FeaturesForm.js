import React, { Component } from 'react';
import QuestionsStore from "../../stores/QuestionsStore";
import "../Users/CompanyEditForm.css"
import * as RecommendAction from "../../actions/RecommendAction.js";

class FeaturesForm extends Component {

    sizeHandler(prop ,value){
      RecommendAction.postAnswer(prop,value);
    }
     
    render() {
      return (
        <div>
        <h3>Feature</h3>
          <form>
            <fieldset>
                <h3>What key feature are important</h3>
                <div>
                    <input onChange={()=> this.sizeHandler({'features':'cheap'})} type="radio" id="huey" name="drone" />
                    <label>Cheap</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'features':'easy'})} type="radio" id="dewey" name="drone" />
                    <label>Easy</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'features':'quick'})} type="radio" id="louie" name="drone" />
                    <label>Quick</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'features':'fun'})} type="radio" id="louie" name="drone" />
                    <label>Fun</label>
                </div>
            </fieldset>
          </form>
      </div>
      );
    }
}
export default FeaturesForm;