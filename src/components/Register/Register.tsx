import React, {Component, ReactEventHandler} from 'react';
import {connect } from 'react-redux';
import {  bindActionCreators , Dispatch } from 'redux';
import { headerActions } from '../../features/header';
import Types from 'MyTypes';
import {headerList} from '../../constants/HeaderCon'
import {indexList} from '../../constants/Index'
import { Modal , Input} from 'antd'
import { clearTag } from '../../helpers/help'
import {debounce} from 'lodash'
import './Register.scss'

interface State{
  userName:string,
  userPassword:string,
  userPasswordRepeat:string,
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
    this.onNameChange = debounce(this.onNameChange,10000)
    this.state={
      userName:'',
      userPassword:'',
      userPasswordRepeat:'',
      visible:true
    }
  }

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    let value = clearTag(e.target.value); 
    this.setState({
      userName:value
    })
  }

  onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    let value = clearTag(e.target.value); 
    this.setState({
      userPassword:value
    })
  }

  onPasswordRepeatChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    let value = clearTag(e.target.value); 
    this.setState({
      userPasswordRepeat:value
    })
  }
  

  onLogIn =() =>{
    const { userName , userPassword } = this.state
    this.props.logIn({
      userName,
      userPassword
    })
  }
  onCancel = () =>{
    this.setState({
      visible:false
    })
  }

  
  render(){
    return (
      <div className="logIn">
        <Modal
          title={headerList.LOGIN}
          visible={this.state.visible}
          okText={headerList.LOGIN}
          cancelText={indexList.CANCEL}
          onOk={this.onLogIn}
          onCancel={this.onCancel}
        >
          <div className="name" >
            <span className="inputTitle">
              {headerList.NAME}
            </span>
            <Input onChange={this.onNameChange}/>
          </div>
          <div className="password" onChange={this.onPasswordChange}>
            <span className="inputTitle">
              {headerList.PASSWORD}
            </span>
            <Input />
          </div>
          <div className="passwordRepeat" onChange={this.onPasswordChange}>
            <span className="inputTitle">
              {headerList.PASSWORDREPEAT}
            </span>
            <Input onChange={this.onPasswordRepeatChange}/>
          </div>
        </Modal>
        
      </div>
    )
    
  }
    
}

export default connect(null, mapDispatchToProps)(LogIn);