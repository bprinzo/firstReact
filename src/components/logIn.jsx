import React from 'react'
import {useForm } from "react-hook-form"
import {Link} from 'react-router-dom'
import axios from 'axios'
 

export default (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, ev) => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        ev.target.reset()
        axios.post('https://reqres.in/api/login', {email, password})
        .then(function(response){
            console.log(response)
            window.localStorage.setItem('token', response.data.token )
            window.location.reload();
        })
        .catch(function(error){
            console.log(error)
        })
    }


    return (
        <form className="register" onSubmit={handleSubmit(onSubmit)}>
            <h1>Log In</h1>

            <input name='email' placeholder = 'Email' ref={register({ required: true, minLength: 3, maxLength: 50, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
            {errors.email && errors.email.type === "required" && <p>This field is required</p>}
            {errors.email && errors.email.type === "minLength" && <p>This field is required min length of 3</p>}
            {errors.email && errors.email.type === "maxLength" && <p>This field is required max length of 50</p>}
            {errors.email && errors.email.type === "pattern" && <p>Invalid email adress</p>}


            <input type = 'password' name='password' placeholder = 'Password' ref={register({ required: true, minLength: 3, maxLength: 20 })} />
            {errors.password && errors.password.type === "required" && <p>This field is required</p>}
            {errors.password && errors.password.type === "minLength" && <p>This field is required min length of 3</p>}
            {errors.password && errors.password.type === "maxLength" && <p>This field is required max length of 20</p>}
            <input type='submit'/>
            <p className='accountCreate'>Don't have an account yet?<Link to = '/register'> Sign up </Link></p>
        </form>
    );

}