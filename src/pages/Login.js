import './LoginUi.css';
import profile from "../images/a.png";
import email from "../images/email.jpg";
import pass from "../images/pass.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginUi() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    const onChangeFormData = (e) => {
        setFormData(data => {
            return { ...data, [e.target.name]: e.target.value }
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.email === "foo" && formData.password === "bar") {
            localStorage.setItem("isAuth", true);
            navigate('/display');
        }
    }

    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={profile} alt="profile" className="profile" />

                        </div>


                    </div>
                    <div>
                        <form onSubmit={onSubmit} >
                            <h1>Login Page</h1>

                            <div>
                                <img src={email} alt="email" className="email" />
                                <input value={formData.email} required onChange={onChangeFormData} name='email' type="text" placeholder="user name" className="name" />
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email" />
                                <input value={formData.password} required onChange={onChangeFormData} name='password' type="password" placeholder="password" className="name" />
                            </div>
                            <div className="login-button">
                                <button>Login</button>
                            </div>
                            {/* 
                        <p className="link">
                            <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
                        </p> */}

                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default LoginUi;