import * as React from 'react';
import _ from 'lodash';
import * as Logo from '../assets/images/lenovo.png'
import './Header.scss'
import { user} from '../features/header/reducer'

import {connect } from 'react-redux';
import {  bindActionCreators , Dispatch } from 'redux';
import Types from 'MyTypes';
import { headerActions } from '../features/header';

interface Props{
  tabList : string[];
  tabKey:number;
  user: user;
  changeTab(num:number):object;
  logIn(obj:object):object;
}
interface State{
  
}

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

class Header extends React.Component<Props,State>{
  // constructor(props:Props){
  //   super(props)
  // }
  getTab = () =>{
    const { tabList, tabKey } = this.props
    let divList:Array<React.ReactElement> = []
    _.forEach(tabList,(v,i) =>{
      let classFocus = 'headerTab'
      if(i === tabKey){
        classFocus += ' tabFocus'
      }
      divList.push(
        <div className={classFocus} key={i + 'tab'} onClick={e => this.onTabClick(i)}>
          { _.toUpper(v)}
        </div>
      )
    })
    return divList
  }
  onTabClick = (i:number) => { 
    this.props.changeTab(i)
    this.props.logIn({})
  }

  render(){
    
    return(
      <div className='header'>
        <div className='headerImg'>
          <img src={Logo} alt="logo"/>
        </div>
        <div className='headerTabs'>
          {this.getTab()}
        </div>
        <div className='headerUser'>
          <div className='logIn'>
            登录
          </div>
          <div className='register'>
            /注册
          </div>
        </div>

      </div>
    )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Header);