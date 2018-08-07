import React, { Component }  from 'react';
import App from './App';
class AppSsr extends Component{

  render(){

    return (
      <App callFrom="server"  /> 
    )
  }
}

export default AppSsr;

