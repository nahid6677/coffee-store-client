import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';

const SignIn = () => {
    const {signInUsers} = useContext(AuthContext);
    const handlesingIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)
        signInUsers(email, password)
        .then(result =>{
            console.log(result)
            // update a last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};
            fetch(`http://localhost:5000/users`,{
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
            })
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlesingIn} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Ip</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;