import React, { Component } from 'react';

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
        let style = {marginTop:"0px"}; //adjust this to control the blank space
        return(
            <div id="search" style={style}>
                <div className="navbar-form">
                    <input type="text" value={this.state.searchText} onChange={(event) => this.onHandleChange(event)} onKeyPress={(e) => this.onKeyStroke(e)}
                           className="form-control" name="search" style={{width:"200px",borderColor:"#A7A7A7"}} placeholder={this.props.placeholder}/>
                    <button className="btn btn-primary" onClick={() => this.onButtonPress()} style={{backgroundColor:"#00A2D5",borderColor:"#A7A7A7"}} type="button">Submit</button>
                </div>
            </div>
        );
    }

}

export default Survey;