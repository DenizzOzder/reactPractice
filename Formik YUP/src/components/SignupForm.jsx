import React from 'react';
import { useFormik } from 'formik';
import { RegisterSchema } from '../schemas/RegisterSchema';

const SignupForm = () => {
 
    
  const {handleSubmit, handleChange, errors, values} = useFormik({
    initialValues: {
      email: '',
      name: '',
      age: '',

    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: RegisterSchema
  });
  console.log(errors)
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
      />
      {errors.email && <p> {errors.email}</p>}
      </div>
      <div>
       <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        value={values.name}
      />
      </div>
      <div>
      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={handleChange}
        value={values.age}
      />
      {errors.age && <p>{errors.age}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;