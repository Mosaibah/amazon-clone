import React from 'react'
import { Link , useHistory} from 'react-router-dom';
import svg from "./Amazon_logo_black.svg";
import {useState} from 'react'
import {auth} from '../firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) =>{
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) =>{
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="container text-center pt-5">
             <Link className="" to="/">
                <img src={svg} width="200" className=""  alt=""/>
            </Link>
            <div className="card w-sm-75 w-md-50 w-lg-25 mx-auto mt-5 mt-sm-3">
                <div className="card-body">
                    <form>

                        <h3 className="text-center text-sm-start ">Sign in</h3>
                    <div className="mb-3 text-start mt-3">
                            <label htmlFor="email" className="form-label ms-2 fw-bolder">E-mail</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                    <div className="mb-3 text-start">
                            <label htmlFor="password" className="form-label ms-2 fw-bolder">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <button className="btn btn-warning w-100" style={{opacity:0.90}} type='submit' onClick={signIn}>
                            Sgin In
                        </button>

                        <div className="div my-3" style={{fontSize:13}}>
                            By sigining-in you agree to Amaxon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Noice and our interest-Based Ads Notice.
                        </div>

                        <button className="btn btn-secondary w-100" type='submit' onClick={register}>
                            Create your Amazon Account
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
