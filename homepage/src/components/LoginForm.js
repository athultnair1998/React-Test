import React from "react";
import "./loginform.css"
import { AiFillAccountBook, AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




function LoginForm() {

    const navigate = useNavigate()


    const handleSubmint = () => {
        navigate('/home')
        toast.success("Login Successful")
    }
    return (
        <div className="main">
            <div className="cover">
                <h2>Sign In</h2>
                <p>New User? <a href="h">Create an account</a></p>
                <div className="input-field">
                    <input className="email" type="text"
                        placeholder="username or email" />
                    <input className="password" type="password" placeholder="password" />
                </div>
                <p><input className="check-box" type='checkbox' /> keep me signed in</p>
                <div onClick={handleSubmint} className="login-btn">Sign in</div>
                <div className="horizo">
                    <h4><span>Or Sign in With</span></h4>
                </div>
                <div className="icons">
                    <div className="google">
                        <h1>
                            <AiFillGoogleCircle />
                        </h1>
                    </div>
                    <div className="google">
                        <h1>
                            <AiFillFacebook />
                        </h1>
                    </div>
                    <div className="google">
                        <h1>
                            <AiOutlineLinkedin />
                        </h1>
                    </div>
                    <div className="google">
                        <h1>
                            <AiFillTwitterCircle />
                        </h1>
                    </div>
                </div>
            </div>
            <div className="image container">
                <img src="data:image/png;base64,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" alt="login" />
            </div>


        </div>

    )
}

export default LoginForm