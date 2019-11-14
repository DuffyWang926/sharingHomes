import * as React from 'react';
import _ from 'lodash';
import * as Logo from '../assets/images/lenovo.png'
import './Header.scss'
import { user} from '../features/header/reducer'

interface Props{
  tabList : string[];
  tabKey:number;
  user: user;
  changeTab(num:number):object;
}
interface State{
  
}

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

// function Header({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
//     if (enthusiasmLevel <= 0) {
//       throw new Error('You could be a little more enthusiastic. :D');
//     }
  
//     return (
//       <div className="hello">
//         <div className="greeting">
//           Hello {name + getExclamationMarks(enthusiasmLevel)}
//         </div>
//         <div>
//           <button onClick={onDecrement}>-</button>
//           <button onClick={onIncrement}>+</button>
//         </div>
//       </div>
//     );
//   }

export default Header;