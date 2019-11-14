import Hello from '../components/Hello';

import {connect } from 'react-redux';
import {  bindActionCreators , Dispatch } from 'redux';
import Types from 'MyTypes';
import { countersActions } from '../features/counters';


const mapStateToProps = (state: Types.RootState) => {
  console.log(state,'hello')
  return{
    reduxCounter: state.counters.reduxCounter,
  }
};


const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      onIncrement: countersActions.increment,
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Hello);