import React, {Component, ReactEventHandler} from 'react';
import {connect } from 'react-redux';
import {  bindActionCreators , Dispatch } from 'redux';
import { headerActions } from '../../features/header';
import Types from 'MyTypes';
import {headerList} from '../../constants/Header'
import {indexList} from '../../constants/Index'
import { Modal , Input} from 'antd'
import './LogIn.scss'

interface State{
  userName:string,
  userPassword:string,
  visible:boolean
}

interface Props{
  logIn(obj:object) : object;
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      logIn: headerActions.logIn,
    },
    dispatch
  );

class LogIn extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state={
      userName:'',
      userPassword:'',
      visible:true
    }
  }

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    
    console.log(e.target.value)
    let value = e.target.value; 
    this.setState({
      userName:value
    })
  }

  onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    let value = e.target.value;
    this.setState({
      userPassword:value
    })
  }

  onLogIn =() =>{
    const { userName , userPassword } = this.state
    this.props.logIn({
      userName,
      userPassword
    })
  }

  
  render(){
    return (
      <div className="logIn">
        <Modal
          title={headerList.LOGIN}
          visible={this.state.visible}
          okText={headerList.LOGIN}
          // cancelText={indexList.CANCEL}
        >
          <div className="name" onChange={this.onNameChange}>
            <span className="inputTitle">
              {headerList.NAME}
            </span>
            <Input id='logInName'/>
          </div>
          <div className="password" onChange={this.onPasswordChange}>
            <span className="inputTitle">
              {headerList.PASSWORD}
            </span>
            <Input />
          </div>
        </Modal>
        
      </div>
    )
    
  }
    
}

export default connect(null, mapDispatchToProps)(LogIn);