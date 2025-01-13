import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';

const SingUp = () => {
    const {createUser,setLoading} = useContext(AuthContext);

    const handlesingUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            setLoading(false)

            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = {name,email,createdAt};

            // save new user info to the database
            fetch('http://localhost:5000/users',{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
            })
        })
        .catch(err =>{
            console.log(err)
        })
        // console.log(userPass)
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlesingUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SingUp;