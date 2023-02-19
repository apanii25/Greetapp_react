import React from 'react';
import ReactDOM from 'react-dom';
import './index.css' 

let curtime = new Date();
curtime = curtime.getHours();
let greet = '';
const style ={};

if(curtime>=1 && curtime<12){
  greet = 'Good Morning'
  style.color = 'green';

}
else if(curtime>=12 && curtime<=19){
  greet = 'Good Afternooon'
  style.color = 'orange';
}
else{
  greet = 'Good Night'
  style.color = 'blue';
}


ReactDOM.render(
  <>
  <div className='head'>
  <h1 >Hello,<span style={style}>{greet}...</span>!!!</h1>
  </div>

  </>,document.getElementById("root")
);
