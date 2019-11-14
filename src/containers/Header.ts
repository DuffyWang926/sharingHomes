import Header from '../components/Header';

import {connect } from 'react-redux';
import {  bindActionCreators , Dispatch } from 'redux';
import Types from 'MyTypes';
import { headerActions } from '../features/header';


const mapStateToProps = (state: Types.RootState) => {
  console.log(state)
  return{
    tabKey: state.header.tabKey,
    user:state.header.user
  }
};


const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      changeTab: headerActions.changeTab,
      logIn: headerActions.logIn,
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Header);