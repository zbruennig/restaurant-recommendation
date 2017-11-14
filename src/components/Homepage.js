import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fire from './../fire'

class Homepage extends Component {
  constructor (props) {
    super()
    this.state = {
      messages: ['1']
    }

    this.add = this.add.bind(this)
  }

  add () {
    var preferencesRef = fire.database().ref('preferences')

    var x = preferencesRef.orderByKey()
    x.on('child_added', function (snapshot) {
      var obj = snapshot.val()
            // this.state.message.push(obj);
    })

        // var self = this;
        //
        // preferencesRef.on('value', function(snapshot) {
        //     snapshot.forEach(function(childSnapshot){
        //         var childData = childSnapshot.val();
        //         this.state.messages.push(childData);
        //     });
        // });
  }

  render () {
    this.add()

    return (
      <div>
        {/* {this.state.messages} */}
      </div>
    )
  }
}

export default Homepage

Homepage.propTypes = {

}
