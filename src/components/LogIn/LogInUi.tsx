import React, {Component} from 'react';
import {connect } from 'react-redux';
import {  bindActionCreators , Dispatch } from 'redux';
import { headerActions } from '../../features/header';
import Types from 'MyTypes';
import {headerList} from '../../constants/HeaderCon'
import {indexList} from '../../constants/Index'
import { Modal , Input} from 'antd'
import { clearTag } from '../../helpers/help'
import './LogInUi.scss'

interface State{
  userName:string,
  userPassword:string,
  // visible:boolean
}

interface Props{
  logIn(obj:object) : object;
  visible:boolean;
  updateVisible(bool:boolean) : any;
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
      // visible:true
    }
  }

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    console.log(e)
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

  onLogIn =() =>{
    const { userName , userPassword } = this.state
    this.props.logIn({
      userName,
      userPassword
    })
    this.props.updateVisible(false)
    // this.setState({
    //   visible:false
    // })
  }
  onCancel = () =>{
    this.props.updateVisible(false)
    // this.setState({
    //   visible:false
    // })
  }

  
  render(){
    return (
      <div className="logIn">
        <Modal
          title={headerList.LOGIN}
          visible={this.props.visible}
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
          <div className="password" >
            <span className="inputTitle">
              {headerList.PASSWORD}
            </span>
            <Input type='password' onChange={this.onPasswordChange}/>
          </div>
        </Modal>
      </div>
    )
    
  }
    
}

export default connect(null, mapDispatchToProps)(LogIn);