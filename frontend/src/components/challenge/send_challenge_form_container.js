import { connect } from 'react-redux';
import {createChallenge} from '../../actions/challenge_actions';
import {requestUsers} from '../../actions/users_actions';
import CreateChallengeForm from './create_challenge_form';

const msp = state =>{
  return{
    currentUser: state.session.user,
    errors: state.errors.session,
  };
};

const mdp = dispatch =>{
  return{
    requestUsers: () => dispatch(requestUsers()),
    createChallenge: challengeData => dispatch(createChallenge(challengeData))
  };
};

export default connect(msp, mdp)(CreateChallengeForm);