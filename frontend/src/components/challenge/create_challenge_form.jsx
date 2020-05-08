import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import UserIndexItem from "./user_index_item";

class CreateChallengeForm extends React.Component{
  constructor(props){
    super(props);
    let currentUser = this.props.currentUser;
    this.state = {
      category: "",
      goal: 0,
      challengee_id:0,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  componentWillMount() {
    //debugger
    this.props.requestUsers();
    //debugger
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }


  handleSubmit(e){
    e.preventDefault();
    let challenge = {
    category: this.state.category,
    goal: this.state.goal,
    challengee_id: this.state.challengee_id,
    errors: this.state.errors
    };
    this.props.createChallenge(challenge);
  }
  renderErrors() {
    return (
      <ul className="errors">
        {Object.keys(this.state.errors).map((error, i) => (
          < li key={`error-${i}`} className="error" >
            {this.state.errors[error]}
          </li>
        ))}

      </ul>
    );
  }

  render() {
    const {users} = this.props;
    // debugger
  
    if (users[0] === undefined){
      // debugger
      return null;
    }

    return (
      <>
      <div className="create-challenge-form-container"> </div>
        <div className = "create-challenge-form">
         <form onSubmit={this.handleSubmit}>
            <label> 
              Select Category:
              <select name="category" className="res-drop" onChange={this.update('category')}>
              <option value='Aerobics, low-impact'>Aerobics, low-impact </option>
                  <option value='Aerobics, water ' > Aerobics, water </option>
                  <option value='Bicycling' >Bicycling, 10mph </option>
                  <option value='Dancing, ballroom' >Ballroom Dancing </option>
                  <option value='Elliptical trainer, moderate' >Elliptical trainer, moderate </option>
                  <option value='Golf, carrying clubs' >Golf, carrying clubs </option>
                  <option value='Hiking' >Hiking </option>
                  <option value='Running 5mph' >Running 5mph </option>
                  <option value="Downhill Skiing" >Downhill Skiing </option>
                  <option value='Swimming Laps light or moderate' >Swimming Laps light or moderate </option>
                  <option value='Walking' >Walking </option>
              </select>
            </label>
            <label> Calorie Goal
            <input
                  type="text"
                  value={this.state.goal}
                  onChange={this.update("goal")}
                  placeholder="# calories"
                />
            </label>
              <label>
                Who Will You Challenge?
                <select name="users" className="user-drop" placeholder = "choose username" onChange={this.update('challengee_id')}>
                {users[0].map((user, index) =>(
                  <option key = {index} value = {user._id} >{user.username}</option>
                  ))}
                </select>
              </label>
         </form>
      </div>
    </>
    )
  }
}

export default CreateChallengeForm;