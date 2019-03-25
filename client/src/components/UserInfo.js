import React, { Component } from 'react';

class UserInfo extends Component {

	constructor(props) {
		super(props);

		this.state = {
			destination: ''
		}


	}



  render() {
    return (
      <div className="UserInfo">
        <form>
        	<label>Current Location: </label>
			<input 
			type="text" 
			placeholder="wuddup nigga"
			id="destination" 
			name="destination" 
			value={ this.props.location }
			required maxLength="100" size="30"
       		onChange={this.props.handleLocation} />
       		<button onClick={ this.props.favorite }>Favorite</button>        	

       		<label>Destination: </label>
			<input 
			type="text" 
			placeholder="wuddup nigga"
			id="location" 
			name="location" 
			value={ this.state.location }
			required maxLength="100" size="30"
       		onChange={this.handleLocation} />

        </form>
      </div>
    );
  }
}

export default UserInfo;