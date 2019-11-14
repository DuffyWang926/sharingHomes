import * as React from 'react';
export interface Props{
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

export default Hello;