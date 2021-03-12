import React, { Component } from "react";
 
class Login extends Component{
  render(){
        const { user } = this.props;
        return (
           <>
           <br/><br/><br/><br/><br/><br/>
           {user == null && (
                <div className="wrapper">
                    <div className="column_flex fadeInDown">
                    <div id="formContent">
                        <h2 className="active"> Sign In </h2>

                        <div className="fadeIn first"></div>
                        <div id="signIn" className="city">
                            <form>
                                <input type="email" id="login" className="fadeIn second" name="login" placeholder="Email"/>
                                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                                <input type="submit" className="fadeIn fourth" value="Log In"/>
                            </form>
                        </div>
                        <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    </div>
                    <div className="column_flex fadeInDown">
                    <div id="formContent">
                        <h2 className="active underlineHover">Register </h2>

                        <div className="fadeIn first"></div>
                        <div id="signIn" className="city">
                            <form>
                                <input type="text" id="name" className="fadeIn first" name="login" placeholder="Name"/>
                                <input type="email" id="login" className="fadeIn second" name="login" placeholder="Email"/>
                                <input type="text"  className="fadeIn third" placeholder="Password"/>
                                <input type="submit" className="fadeIn fourth" value="Register"/>
                            </form>
                        </div>
                    
                    </div>
                    </div>
                </div>
           )}
           {user && (
               <>
               <h1>Hello {user} </h1>
               <h5><a href="/">Logout</a></h5>
               </>
           )}
            </>
        );
    }
}

export default Login;   