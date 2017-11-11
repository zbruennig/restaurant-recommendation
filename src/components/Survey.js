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

    }

    onKeyStroke(e) {
        if(e.key==="Enter")
        { this.submit() }
    }

    onButtonPress() {
        // this.props.changeText(this.state.searchText);
        this.submit();
        alert(this.state.searchText);
    }

    onHandleChange(event){
        this.setState({
            searchText: event.target.value
        })
    }

    render(){
        let style = {marginTop:"40px"}; //adjust this to control the blank space
        let inputStyle = {marginLeft:"60px", width:"200px", borderColor:"#A7A7A7"};

        return(
            <div id="search" style={style}>

                <form>
                    <input id="q1" type="text" name="q1" className="form-control" style={inputStyle} /><br/>
                </form>



                <div className="navbar-form">
                    <input type="text" value={this.state.searchText} onChange={(event) => this.onHandleChange(event)} onKeyPress={(e) => this.onKeyStroke(e)}
                           className="form-control" name="search" style={inputStyle} placeholder={this.props.placeholder}/>
                    <button className="btn btn-primary" onClick={() => this.onButtonPress()} style={{backgroundColor:"#0c0a22",borderColor:"#A7A7A7"}} type="button">Submit</button>
                </div>
            </div>
        );
    }

}

export default Survey;

Survey.propTypes = {

};