import { Avatar, Button, FormHelperText, Grid, Paper, TextField, Typography, } from '@mui/material';
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import authService from '../services/authService';
import { toast } from 'react-toastify';
// import axios from 'axios';
// import { useEffect, useState}  from 'react';

export const SIGN_UP = () => {

  const paperStyle = {
    padding: 31.5,
    width: 500,
    margin: "0 auto"
  }
  const headerStyle = {
    // margin: 0
    marginBottom: "1.5vw",
    marginTop: "0.5vw"
  }
  const avatarStyle = {
    color: 'green'
  }
  const genderStyle = {
    display: 'initial',
    // flexDirection : 'column',
    marginTop: '0.5vw',
    marginLeft: '2.5vw'
  }
  const textFieldStyle = {
    marginTop: '1vw',

  }
  const genderlabelStyle = {
    marginLeft: '-10vw',
    marginTop: '1vw',

  }
  const initialValues = {
    name: '',
    email: '',
    ContactNumber: '',
    password: '',
    ConfirmPassword: '',
    gender: ''



  }
  const validationSchema = yup.object().shape({
    name: yup
      .string('Enter Your Name')
      .required('Required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    ContactNumber: yup
      .number('Enter Your 10 Digit Mobile Number')
      .typeError('Enter Valid Phone Number')
      .required('required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    ConfirmPassword: yup
      .string('Enter your password')
      .oneOf([yup.ref('password')], "Password Not Matched")
      .required('Password is required'),
    gender: yup
      .string()
      .oneOf(["male", "female", "other"], "Required")
      .required("Required"),


  });
  // const [userData, setUserdata] = useState();
  // const getData = async () => {
  //   await axios
  //     .get("https://book-e-sell-node-api.vercel.app/api/user/byId?id=${}")
  //     .then((response) => setUserdata(response.data.result));
  // }
  // useEffect(() => {
  //   getData();
  // }, []);
  const onSubmit = async (values, props) => {
    console.log(values)
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000);
    const payload = {

      firstName: values.name,
      lastName: test,
      email: values.email,
      roleId: 2,
      password: values.password,

    };

    await authService.Register(payload).then((response) => {
      if (response && response.status === 200) {
        toast("Data Submitted Successfully",{
          position: "bottom-right"
        })
      }
    })
    .catch((error)=>{
      toast.error("Unable To submit the data", {position: "bottom-right"})
    })

  }


  return (
    <div>

      <Grid align='center'>
        <Paper style={paperStyle}>
          <Grid>
            <Avatar style={avatarStyle}>

            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant='option'>Please Fill These Form To Create An Acoount</Typography>
          </Grid>


          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            {(props) => (
              <Form>





                <Field as={TextField} required id="filled-basic" name='name'
                  helperText={<ErrorMessage name='name' />}
                  label=" Name" placeholder='Enter Your Name' variant="filled" style={textFieldStyle} />



                <Field as={TextField} required id="filled-basic" name='email'
                  helperText={<ErrorMessage name='email' />} type='email' label="Email" placeholder='Enter Your Email' variant="filled" style={textFieldStyle} />




                <Field as={TextField} required id="filled-basic" name='ContactNumber'
                  helperText={<ErrorMessage name='ContactNumber' />} type='integer' pattern="[1-9]{1}[0-9]{9}" label="Number" placeholder='Enter Your Contact No.' variant="filled" style={textFieldStyle} />



                <Field as={TextField} required id="filled-basic" name='password'
                  helperText={<ErrorMessage name='password' />} type='password' label="Password" placeholder='Enter Your Password' variant="filled" style={textFieldStyle} />



                <Field as={TextField} required id="filled-basic" name='ConfirmPassword'
                  helperText={<ErrorMessage name='ConfirmPassword' />} type='password' label="Confirm Password" placeholder='Confirm Your Password' variant="filled" style={textFieldStyle} />






                <Grid >
                  <FormControl >
                    <div style={genderlabelStyle}>
                      <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>

                    </div>
                    <Field as={RadioGroup}
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="gender"
                    >
                      <div style={genderStyle}>

                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormHelperText>
                          <ErrorMessage name='gender' />
                        </FormHelperText>
                      </div>
                    </Field>

                  </FormControl>


                </Grid>


                <Button type='submit' disabled={props.isSubmitting}
                  variant='contained' color='primary' style={textFieldStyle}> {props.isSubmitting ? "Signin Up" : "Sign Up"} </Button>
              </Form>
            )}
          </Formik>

        </Paper>
      </Grid>
    </div >

  );
}