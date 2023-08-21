import * as yup from 'yup';
import { useFormik } from 'formik';
import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography, } from '@mui/material';
import authService from '../services/authService';
import { toast } from 'react-toastify';


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});
const handleSubmit = async(values) =>{
    const payload={
        email : values.email,
        password : values.password,
    };
    await authService.Login(payload).then(response=>{
        if (response && response.status ===200){
            toast.success("User Login Successfully")
        }
    }).catch((error)=>{
        console.log(error)
        toast.error("Login Failed..!!")
    })

}
export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => { handleSubmit(values)
        }          
            
          
        
    });
    const paperStyle = {
        padding: 5,
        width: 500,
        height: "51vw",
        margin: "0 auto"
    }
    const headerStyle = {
        // margin: 0
        marginBottom : "1.5vw",
        marginTop : "0.5vw"
    }
    const avatarStyle = {
        color: 'green'
    }

    const textFieldStyle = {
        marginTop: '2vw',

    }

  return (
   <>
   <div className="mt-4">

<Grid align='center' >
    <Paper  style={paperStyle}>
        <Grid>
            <Avatar style={avatarStyle}>

            </Avatar>
            <h2 style={headerStyle}>Sign In</h2>
            <Typography variant='option' >Enter Your email And Password to Sign In</Typography>
        </Grid>




        <form onSubmit={formik.handleSubmit} >

            <TextField
                required
                fullWidth
                id="email"
                name='email'
                label=" email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder='Enter Your email'
                variant="filled"
                style={textFieldStyle} />


            <TextField
                required
                fullWidth
                id="password"
                type='password'
                label="Password"
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                placeholder='Enter Your Password'
                variant="filled"
                style={textFieldStyle} />


            <Button type='submit' variant='contained' color='primary'
                style={{
                    marginTop: '5vh'
                }}
            disabled ={formik.values.isSubmitting}
            >Sign In</Button>
<div className="pt-4"></div>
            <p>Don't Have An Account ? <a href="/signup">Sign Up</a>
            </p>
        </form>






    </Paper>
</Grid>
</div>
   </>
  )
}
