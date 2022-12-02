import { useFormik } from 'formik';

import * as Yup from "yup";
import './Signup.css';

const Signup = () => {

   const formik = useFormik({
    initialValues:{
        name :"",
        email:"",
        phone: "",
        password:"",
        confirmedPassword:"",

    },
    validationSchema: Yup.object({
        name: Yup.string()
          .required("Required")
          .min(4, "Must be 4 characters or more"),
        email: Yup.string()
          .required("Required")
          .matches(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email address"
          ),
           phone: Yup.string()
          .required("Required")
          .matches(
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            "Must be a valid phone number"
          ),
        password: Yup.string()
          .required("Required")
          .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
            "Password must be 7-19 characters and contain at least one letter, one number and a special character"
          ),
        confirmedPassword: Yup.string()
          .required("Required")
          .oneOf([Yup.ref("password"), null], "Password must match"),
       
      }),
      onSubmit: (values) => {
        window.alert("Form submitted");
        console.log(values);
      },
    });
  
  return (
    <section>
        <form className="infoform" onSubmit={formik.handleSubmit}>
            <label>Your Name</label>
            <input
                id='name' 
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name" 
                placeholder='Enter Your Name'
            />
            {formik.errors.name && (
            <p className="errorMsg"> {formik.errors.name} </p>
            )}
            <label>Your Email</label>
            <input 
                id='email' 
                type="email" 
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                placeholder='Enter Your Email' 
             />
             {formik.errors.email && (
            <p className="errorMsg"> {formik.errors.email} </p>
            )}
            <label>Phone Number</label>
            <input 
                id="phone" 
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
                name="phone" 
                placeholder='Enter Your Phone' />
                 {formik.errors.phone && (
            <p className="errorMsg"> {formik.errors.phone} </p>
            )}
            <label>Your Password</label>
            <input 
                id="password" 
                type="text" 
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password" 
                placeholder='Enter Your Password' 
            />
             {formik.errors.password && (
            <p className="errorMsg"> {formik.errors.password} </p>
            )}
            <label>Your ConfirmedPassword</label>
            <input 
                id="confirmedPassword" 
                type="text" 
                value={formik.values.confirmedPassword}
                onChange={formik.handleChange}
                name="confirmedPassword" 
                placeholder='Enter Your ConfirmedPassword' />
                 {formik.errors.confirmedPassword && (
            <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
            )}
            <button type='submit'>continue</button>
        </form>
    </section>
  )
}

export default Signup
