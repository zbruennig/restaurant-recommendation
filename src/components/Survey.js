import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fire from './../fire';

var mysql = require('mysql');

class Survey extends Component {

    constructor(props){
        super();
        this.state = {
            user: "",
            spicy: "",
            oil: ""
        };
    }

    getChecked(id){
        return document.getElementById(id).checked;
    }

    validate(){

        var errors = "";

        if(this.getChecked("none") | this.getChecked("mild") | this.getChecked("hot") | this.getChecked("spicy")){
            this.state.spicy = document.querySelector('input[name="spicy"]:checked').value;
        }
        else{
            errors+="Must select a spice level.\n";
        }

        if(this.getChecked("yes") | this.getChecked("no")){
            this.state.oil = document.querySelector('input[name="oil"]:checked').value;
        }
        else{
            errors+="Must select oil-fried preference\n";
        }

        if(errors === ""){
            return true;
        }
        else{
            alert(errors);
            return false;
        }
    }

    submit(){
        if(this.validate()){

            //can probably be optimized a LOT

            let cuisines = [];

            if(this.getChecked("asian")){
                cuisines.push("Asian");
            }
            if(this.getChecked("mexican")){
                cuisines.push("Mexican");
            }
            if(this.getChecked("italian")){
                cuisines.push("Italian");
            }
            if(this.getChecked("indian")){
                cuisines.push("Indian");
            }

            let allergies = [];

            if(this.getChecked("peanuts")){
                allergies.push("Peanuts");
            }
            if(this.getChecked("milk")){
                allergies.push("Milk");
            }
            if(this.getChecked("gluten")){
                allergies.push("Gluten");
            }
            if(this.getChecked("eggs")){
                allergies.push("Eggs");
            }

            let diet = [];

            if(this.getChecked("vegan")){
                diet.push("Vegan");
            }
            if(this.getChecked("vegetarian")){
                diet.push("Vegetarian");
            }

            let user = this.state.user,
                spicy = this.state.spicy,
                oil = this.state.oil;

            let object = {id:user, allergy:allergies, spice:spicy, diet:diet, fried:oil};

            // console.log(object);
            fire.database().ref('preferences').push(object);

            var ref = fire.database().ref('preferences');

            let messagesRef = fire.database().ref('preferences').orderByKey().limitToLast(100);
            messagesRef.on('child_added', snapshot => {
                let message = { text: snapshot.val(), id: snapshot.key };
                console.log({ messages: [message].concat(this.state.messages).text });
            })

        }
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
            user: event.target.value
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
                                <li><input type="checkbox" id = "asian" name="asian" value="asian"/> Asian<br/></li>
                                <li><input type="checkbox" id = "mexican" name="mexican" value="mexican"/> Mexican<br/></li>
                                <li><input type="checkbox" id = "italian" name="italian" value="italian"/> Italian<br/></li>
                                <li><input type="checkbox" id = "indian" name="indian" value="indian"/> Indian<br/></li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>List any allergies you have:</h4>
                            <ul className="list-inline">
                                <li><input type="checkbox" id="peanuts" name="peanuts" value="peanuts"/> Peanuts<br/></li>
                                <li><input type="checkbox" id="milk" name="milk" value="milk"/> Milk<br/></li>
                                <li><input type="checkbox" id="gluten" name="gluten" value="gluten"/> Gluten<br/></li>
                                <li><input type="checkbox" id="eggs" name="eggs" value="eggs"/> Eggs<br/></li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>What level of spice do you prefer?</h4>
                            <ul className="list-inline">
                                <li><input type="radio" id="none" name="spicy" value="None"/> None<br/></li>
                                <li><input type="radio" id="mild" name="spicy" value="Mild"/> Mild<br/></li>
                                <li><input type="radio" id="hot" name="spicy" value="Hot"/> Hot<br/></li>
                                <li><input type="radio" id="spicy" name="spicy" value="Spicy"/> Spicy<br/></li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>Any diet preferences?</h4>
                            <ul className="list-inline">
                                <li><input type="checkbox" id="vegan" name="vegetarian" value="vegan"/>Vegan</li>
                                <li><input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian"/>Vegetarian</li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>Do you prefer oil-fried food?</h4>
                            <ul className="list-inline">
                                <li><input type="radio" id="yes" name="oil" value="Yes"/>Yes</li>
                                <li><input type="radio" id="no" name="oil" value="No"/>No</li>
                            </ul>
                            <br/>
                        </div>
                        <div>
                            <h4>Input your username:</h4>
                            <input type="text" value={this.state.user} onChange={(event) => this.onHandleChange(event)} onKeyPress={(e) => this.onKeyStroke(e)}
                                   className="form-control" name="user" style={inputStyle} placeholder={this.props.placeholder}/>
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