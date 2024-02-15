import React, { useState } from 'react';
import ParticleBg from '../../Components/ParticleBg';
import { TextField } from '@mui/material';
import { Formik } from 'formik';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import AOS from 'aos';
// import { DatePicker } from '@mui/lab/DatePicker';
// import  LocalizationProvider from '@mui/lab/LocalizationProvider' // Import LocalizationProvider
// import AdapterDateFns from '@mui/lab/AdapterDateFns';


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  AOS.init();

  return (
    <div className='lg:justify-center lg:flex'>
      <ParticleBg />
      <div data-aos="fade-bottom"
        data-aos-offset="100"
        data-aos-delay="80"
        data-aos-duration="3000"
        className='lg:p-6 mt-56 md:mt-80 md:p-5 lg:mt-24 rounded-md lg:w-1/2 px-4 w-100'>
        <div className='p-2 rounded-lg shd'>
          <h1 className='text-slate-700'>Create Your account</h1>
          <p className='text-slate-600'>Begin Your Journey with Zmax</p>

          <Formik
            initialValues={{ email: '', fname: '', lname: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              }
              else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.fname) {
                errors.fname = 'Required';
              }
              if (!values.lname) {
                errors.lname = 'Required';
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
                  sx={{ marginTop: 2 }}
                  id='filled-basic'
                  label='Enter your First Name'
                  variant='filled'
                  type='text'
                  name='fname'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fname}
                  error={touched.fname && errors.fname ? true : false}
                  helperText={touched.fname && errors.fname}
                />

                <TextField

                  sx={{ marginY: 2 }}
                  id='filled-basic'
                  label='Enter your Last Name'
                  variant='filled'
                  type='text'
                  name='lname'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lname}
                  error={touched.lname && errors.lname ? true : false}
                  helperText={touched.lname && errors.lname}
                />
                <TextField
                  id='filled-basic'
                  label='Email*'
                  variant='filled'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email ? true : false}
                  helperText={touched.email && errors.email}
                />

                <FormControl

                  className='inp'
                  sx={{ marginY: 2 }}
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
                            <div className='absolute'><img src="/assets/hidden.png" style={{ filter: "brightness(300%)" }} alt="Hide Password" /></div>
                          ) : (
                            <div className='absolute'><img src="/assets/eye.png" alt="Show Password" /></div>
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {touched.password && errors.password && (
                    <FormHelperText>{errors.password}</FormHelperText>
                  )}
                </FormControl>

                <button type="submit" disabled={isSubmitting} className='w-full font-bold mt-2 text-slate-800 bg-slate-400 p-2  cursor-pointer'>Create</button>
              </form>
            )}
          </Formik>
          <div className='mt-4 mb-2'>
            <>Already have an account <Link to={"/Login"} className='me-2 text-slate-600 font-bold'>Login</Link></>
          </div>
        </div>
      </div>
    </div>
  );
}
