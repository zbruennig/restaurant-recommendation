import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Survey extends Component {

    constructor(props){
        super();
        this.state = {
            searchText: ""
        };
    }

    submit(){
        alert(this.state.searchText);
    }

    onKeyStroke(e) {
        if(e.key==="Enter")
        { this.submit() }
    }

    onButtonPress() {
        this.submit();
    }

    onHandleChange(event){
        this.setState({
            searchText: event.target.value
        })
    }

    render(){
        let style = {marginTop:"40px"}; //adjust this to control the blank space
        let inputStyle = {align:"center", width:"200px", borderColor:"#A7A7A7"};

        return(
            <div id="search" style={style}>

                <div className="navbar-form">
                    <form>

                        <div>
                            <h4>What types of cuisine do you prefer?</h4>
                            <ul className="list-inline">
                                <li><input type="checkbox" name="cuisine" value="Asian"/> Asian<br/></li>
                                <li><input type="checkbox" name="cuisine" value="Mexican"/> Mexican<br/></li>
                                <li><input type="checkbox" name="cuisine" value="Italian"/> Italian<br/></li>
                                <li><input type="checkbox" name="cuisine" value="Indian"/> Indian<br/></li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>List any allergies you have:</h4>
                            <ul className="list-inline">
                                <li><input type="checkbox" name="allergies" value="Peanuts"/> Peanuts<br/></li>
                                <li><input type="checkbox" name="allergies" value="Milk"/> Milk<br/></li>
                                <li><input type="checkbox" name="allergies" value="Gluten"/> Gluten<br/></li>
                                <li><input type="checkbox" name="allergies" value="Eggs"/> Eggs<br/></li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>What level of spice do you prefer?</h4>
                            <ul className="list-inline">
                                <li><input type="radio" name="spice" value="None"/> None<br/></li>
                                <li><input type="radio" name="spice" value="Mild"/> Mild<br/></li>
                                <li><input type="radio" name="spice" value="Hot"/> Hot<br/></li>
                                <li><input type="radio" name="spice" value="Spicy"/> Spicy<br/></li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>Any diet preferences?</h4>
                            <ul className="list-inline">
                                <li><input type="checkbox" name="diet" value="Vegan"/>Vegan</li>
                                <li><input type="checkbox" name="diet" value="Vegetarian"/>Vegetarian</li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>Do you prefer oil-fried food?</h4>
                            <ul className="list-inline">
                                <li><input type="radio" name="oil" value="Yes"/>Yes</li>
                                <li><input type="radio" name="oil" value="No"/>No</li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>Input your email:</h4>
                            <input type="text" value={this.state.searchText} onChange={(event) => this.onHandleChange(event)} onKeyPress={(e) => this.onKeyStroke(e)}
                                   className="form-control" name="email" style={inputStyle} placeholder={this.props.placeholder}/>
                            <button className="btn btn-primary" onClick={() => this.onButtonPress()} style={{backgroundColor:"#0c0a22",borderColor:"#A7A7A7"}} type="button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default Survey;

Survey.propTypes = {

};