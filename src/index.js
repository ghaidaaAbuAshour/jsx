import React from 'react';
import ReactDOM from 'react-dom';


const App = () =>{
return <div>  Hi there! </div>;
};

const App2 = () =>
{
return  (
        <div>
         <label className="label" for="name">ENTER NAME </label>
         <input type="text" id="name" />
         <button>Submit</button>
         </div>
      );
};

const App3 = () =>
{

const buttonText="click me! ";

return  (
        <div>
         <label className="label" htmlFor="name">ENTER NAME </label>
         <input type="text" id="name" />
         <button style={{backgroundColor:'blue',color:'white'}}>{buttonText}</button>
         </div>
      );
};

const App4 = () =>
{

function  getTime()
{

  return (new Date()).toLocaleTimeString();
}

return  (
        <div>
         <div>Current Date:: </div>
         <h1>{getTime()}</h1>
        </div>
      );
};

const App5 = () =>
{
function  getTime()
{
  return new Date().getFullYear() +' - '+new Date().getMonth() +' - '+new Date().getDate()
}
return  (
        <div>
         <div>Current Date:: </div>
         <h1>{getTime()}</h1>
        </div>
      );
};




ReactDOM.render(


<App5 />,document.querySelector('#root'));
