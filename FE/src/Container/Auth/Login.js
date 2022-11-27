import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginApi } from "../../services/userService"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            isShowPassword:false,
            errMessage :''
        }
    }

    handleOnChangeUsername = (event)=>{
        this.setState({
           email:event.target.value
        })
    } 

    handleOnChangePassword = (event)=>{
        this.setState({
            password:event.target.value
        })
    } 

    handleLogin = async () =>{
        this.setState({
            errMessage:''
        })
        try {
            let data = await handleLoginApi(this.state.email,this.state.password);
            if(data && data.errCode !==0){
                this.setState({
                    errMessage: data.message
                })
            }
            if(data && data.errorCode === 0){
                this.props.userLoginSuccess(data.user);
                console.log('login success');
            }
            
        } catch (error) {
            console.log(error.response);
            if(error.response){
                if(error.response.data){
                    this.setState({
                        errMessage : error.response.data.message
                    })
                }
            }
        }

    }
    handleShowHidePassword = ()=>{
        this.setState({
            isShowPassword : !this.state.isShowPassword
        })
        console.log(this.state.isShowPassword);
        console.log("oke");
    }
    render() {
        //JSX
        return(
            <div className="login-background">
                <div className="login-container">
                    <div className='login-content row'>
                        <div className=' text-login'>Login</div>
                        <div className=' form-group login-input'>
                            <label>Username</label>
                            <input
                             type='text' 
                             className='form-control' 
                             placeholder='Enter your username'
                             value={this.state.username}
                             onChange={
                                this.handleOnChangeUsername}/>
                        </div>
                        <div className='form-group login-input'>
                            <label>Password</label>
                            <div className='custom-input-password'>
                               <input 
                                   type={this.state.isShowPassword ? 'text' : 'password'} 
                                   className='form-control' 
                                   placeholder='Enter your password'
                                   value={this.state.password}
                                   onChange={
                                       this.handleOnChangePassword}/> 

                                <span className="custom-icon" onClick={
                                    this.handleShowHidePassword}>
                                   <i class={this.state.isShowPassword ? 'fa fa-eye' :'fa fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12' style={{ color : 'red' }}>
                            {this.state.errMessage }
                        </div>
                        <div className='col-12'>
                            <button 
                            className='btn-login'
                            onClick={()=>{
                                this.handleLogin()
                            }} >Log in</button>
                        </div>
                        <div className='col-12'>
                            <a href="/Register-user" className='forgot-password'>Forget your password</a>
                        </div>
                        <div className=' text-center mt-3'>
                            <span className='text-other-login'>Or Login with</span>
                        </div>
                        <div className='col-12 social-login'>
                           <i className="fa fa-google google" aria-hidden="true"></i>
                           <i className="fa fa-facebook facebook" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

// const mapStateToProps = state => {
//     return {
//         language: state.app.language
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         navigate: (path) => dispatch(push(path)),
//         userLoginSuccess : (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
//     };
// };

export default Login;
