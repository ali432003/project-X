import React, { useState } from 'react';
import ParticleBg from '../../Components/ParticleBg';
import { TextField } from '@mui/material';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import AOS from 'aos';

export default function ForgetPass() {
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
        className='lg:p-6 mt-56 md:mt-80 md:p-5 lg:mt-28 rounded-md lg:w-1/2 px-4 w-100'>
        <div className='p-2 rounded-lg shd'>
          <h1 className='text-slate-700'>Reset Your Password</h1>
          <p className='text-slate-600'>Please enter your email address to reset your password</p>

          <Formik
            initialValues={{ email: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
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

                <button type="submit" disabled={isSubmitting} className='w-full font-bold mt-2 text-slate-800 bg-slate-400 p-2 cursor-pointer'>
                  Reset Password
                </button>
              </form>
            )}
          </Formik>

          <div className='mt-4 mb-2 bg-[#fbfbfb]'>
            <p>
              Remember your password? <Link to={"/login"} className=' me-2 text-slate-600 font-bold'>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
