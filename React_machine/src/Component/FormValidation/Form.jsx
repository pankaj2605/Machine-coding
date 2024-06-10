import React, { useState } from 'react'
import "./Form.css"

export default function Form() {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:''
    });

    const [errors,setErrors]=useState({
        name:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const validate=()=>{
        let valid=true;
        let errors={};

        if(!formData.name.trim()){
            errors.name ='Name is required';
            valid =false;
        }

        if(!formData.email){
            errors.email="Email is required";
            valid =false;
        }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            valid = false;
        }

        if (!formData.password) {
            errors.password = 'Password is required';
            valid = false;
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(errors);
        return valid;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            console.log('Form Submitted',formData);

            setFormData({
                name:'',
                email:'',
                password:''
            });
            setErrors({});
        }
    }
  return (
    <form onSubmit={handleSubmit} className="form">
        <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'error':''}/>
            {errors.name && <span className='error-message'>{errors.name}</span>}
        </div>
        <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error':''}/>
            {errors.email && <span className='error-message'>{errors.email}</span>}
        </div>
        <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={errors.password ? 'error':''}/>
            {errors.password && <span className='error-message'>{errors.password}</span>}
        </div>
        <button type="submit">submit</button>
    </form>
  )
}
