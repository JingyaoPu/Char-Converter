import React from 'react'

class Login extends React.Component{
    constructor(p){
        super(p);
        this.state = {isLogin:p.isLogin};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState((preState)=>({isLogin:!preState.isLogin}));
    }

    render(){
        return(
            
            <button onClick = {this.handleClick}>
                {this.state.isLogin? 'Sign out':'Sign in'}
            </button>
        )
    }

}
  
  export default Login;