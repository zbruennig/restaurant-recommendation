import React, { Component } from 'react';

class Survey extends Component {

    submit(){

    }

    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={() => this.onButtonPress()}
                        style={{backgroundColor:"#00A2D5",borderColor:"#A7A7A7"}} type="button">Search</button>
            </div>
        );
    }

}

export default Survey;