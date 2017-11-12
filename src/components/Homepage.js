import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fire from './../fire';

class Homepage extends Component {

    constructor(props){
        super();
        this.state = {
            messages: []
        };
    }

    render(){

        var preferencesRef = fire.database().ref('preferences');

        preferencesRef.on('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot){
                var childData = childSnapshot.val();
                console.log(childData);
            });
        });

        return(
            <div>
                {this.state.messages}
            </div>
        );
    }
}

export default Homepage;

Homepage.propTypes = {

};