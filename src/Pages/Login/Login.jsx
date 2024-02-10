import React, { useState } from 'react'
import ParticleBg from "../../Components/ParticleBg"
import "./Login.css"
import { TextField } from '@mui/material'
import { Formik } from 'formik';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { useNavigate, Link } from 'react-router-dom';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='lg:justify-center lg:flex'>
      <ParticleBg />
      <div className='lg:p-6 mt-56 md:mt-80 md:p-5 lg:mt-24 rounded-md lg:w-1/2 px-4 w-100'>
        <div className='p-2 rounded-lg shd'>
          <h1 className='text-slate-700'>Welcome To Zmax</h1>
          <p className='text-slate-600'>We have all you want</p>


          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }

              if (!values.password) {
                errors.password = 'Required';
              } else if (
                values.password.length !== 8 || /^\d/.test(values.password)
              ) {
                errors.password = 'Password must be 8 characters long and not start with a number';
              }

              return errors;
            }}
          // onSubmit={(values, { setSubmitting }) => {
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));   //showing alert on submit of mail and password
          //     setSubmitting(false);
          //   }, 400);
          // }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <TextField
                  className='inp'
                  id="filled-basic"
                  label="Enter your Email"
                  variant="filled"
                  type="email"
                  sx={{ marginY: 2 }}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email ? true : false}
                  helperText={touched.email && errors.email}
                // InputProps={{
                //   style: {
                //     color: '#fff', // Text color set to white
                //   },
                // }}
                // InputLabelProps={{
                //   style: {
                //     color: '#fff', // Placeholder color set to white
                //   },
                // }}
                // FormHelperTextProps={{
                //   style: {
                //     width:"100%",
                //     backgroundColor: '#000', // HelperText color set to white
                //   },
                // }}
                />
                <FormControl

                  className='inp'
                  variant="filled"
                  error={touched.password && errors.password ? true : false}
                >
                  <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    InputProps={{
                      style: {
                        backgroundColor: '#fff', // Text color set to white
                      },
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <div className='absolute'><img src="src/assets/hidden.png" style={{ filter: "brightness(300%)" }} alt="Hide Password" /></div>
                          ) : (
                            <div className='absolute'><img src="src/assets/eye.png" alt="Show Password" /></div>
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {touched.password && errors.password && (
                    <FormHelperText>{errors.password}</FormHelperText>
                  )}
                </FormControl>


                <div className="flex mt-5 justify-between">
                  <div className='flex'>
                    <input type="checkbox" className='me-2' />
                    <p className='text-slate-700'>Remember Me</p>
                  </div>
                  <div className='flex'>
                    <Link to={"/ForgetPass"} className='text-black text-slate-600 font-bold'>Forget pasword?</Link>
                  </div>
                </div>
                <button  type="submit" disabled={isSubmitting} className='btn w-full font-bold mt-4 text-slate-800 bg-blue-300 p-2 mb-4 cursor-pointer'>Login</button>
                <p className='text-slate-700'>if you are new here then <Link to={"/SignUp"} className='me-2 text-slate-600 font-bold'>Sign Up</Link></p>
              </form>
            )}
          </Formik>
          <div class="my-4">
            <div class="h-1 bg-slate-300 relative">
              <div class="text-center">
                <div class="w-full h-px bg-slate-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div class="rounded-lg px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: "#f7faf9" }}>OR</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div >

  )
}
