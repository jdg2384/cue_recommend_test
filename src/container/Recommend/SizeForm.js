import React, { Component } from 'react';
import QuestionsStore from "../../stores/QuestionsStore";
import "../Users/CompanyEditForm.css"
import * as RecommendAction from "../../actions/RecommendAction.js";
import Suzie from "../../img/Suzy-4x3-1.svg";
class SizeForm extends Component {
    
    sizeHandler(prop ,value){
      RecommendAction.postAnswer(prop,value);
    }

    renderQuestion(){
      return (
      <div>
          <form>
            <fieldset>
                <h3>Business Size</h3>
                <div>
                    <input onChange={()=> this.sizeHandler({'size':'small'})} type="radio" id="huey" name="drone" />
                    <label>Small</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'size':'medium'})} type="radio" id="dewey" name="drone" />
                    <label>Medium</label>
                </div>

                <div>
                    <input onChange={()=> this.sizeHandler({'size':'large'})} type="radio" id="louie" name="drone" />
                    <label>Large</label>
                </div>
            </fieldset>
          </form>
          <img className="suzie" src={Suzie} alt="Suzie_CUE"/>
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
export default SizeForm;