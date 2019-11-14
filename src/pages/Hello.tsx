import * as React from 'react';
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

interface Props{
  reduxCounter : number;
    onIncrement?: () => void;
}

function Hello({ reduxCounter,onIncrement }: Props) {
   const onClick = () =>{
     console.log(onIncrement)
     onIncrement && onIncrement()
     
   }
  
    return (
      <div className="hello">
        <div className="greeting">
          Hello {reduxCounter}
        </div>
        <div>
          <button onClick={onClick}>+</button>
        </div>
      </div>
    );
  }


export default connect(mapStateToProps, mapDispatchToProps)(Hello);