import React from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
});

export default function UseForm() {
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { register, control, handleSubmit } = form;
  const { errors } = useFormState({ control });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <>
      <h1 className="text-center m-5">Login Form</h1>
      <div className="flex justify-center mt-8">
        <form onSubmit={handleSubmit(onSubmit)} className="border-4 border-sky-500 text-center" style={{ width: "400px" }}>
          <label htmlFor="username">Username</label><br />
          <input className="border-4 border-sky-500" type="text" id="username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>
          <br />
          <label htmlFor="email">Email</label><br />
          <input className="border-4 border-sky-500" type="text" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
          <br />
          <label htmlFor="password">Password</label><br />
          <input className="border-4 border-sky-500" type="password" id="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>
          <br />
          <button className="bg-red-500 p-2 m-3">Submit</button>
        </form>
      </div>
    </>
  );
}
