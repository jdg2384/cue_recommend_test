import React, { Component } from 'react';
import QuestionsStore from "../../stores/QuestionsStore";
import "../Users/CompanyEditForm.css"
import * as RecommendAction from "../../actions/RecommendAction.js";

class PriceForm extends Component {

    sizeHandler(prop ,value){
      RecommendAction.postAnswer(prop,value);
    }

    render() {
      return (
        <div>
        <h3>Price</h3>
          <form>
            <fieldset>
                <h3>Software Price</h3>
                <div>
                    <input onChange={()=> this.sizeHandler({'price':'low'})} type="radio" id="huey" name="drone" />
                    <label>$0-10</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'price':'medium'})} type="radio" id="dewey" name="drone" />
                    <label>$10-30</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'price':'high'})} type="radio" id="louie" name="drone" />
                    <label>$30-60</label>
                </div>
            </fieldset>
          </form>
      </div>
      );
    }
}
export default PriceForm;