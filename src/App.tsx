import React from 'react';
import FormInputs from './components/FormInputs';
import { useState, FormEvent, ChangeEvent } from 'react';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
function App() {
  const [values, setValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const inputs = [
    {
      id: 1,
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      errorMessage: 'First name should be 3-16 characters and should not include any special character',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: 2,
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      errorMessage: 'Last name should be 3-16 characters and should not include any special character',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: 3,
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address',
      required: true
    },
    {
      id: 4,
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Password should be 8-20 characters and include at least 1 letter and special character',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required: true
    },
    {
      id: 5,
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Passwords do not match',
      pattern: values.password,
      required: true
    }
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name] : e.target.value })
  }
  console.log(values)
  return (
    <div className="w-screen h-screen">
      <div className='flex flex-col justify-center items-center h-full w-full'>
      <form onSubmit={handleSubmit} action="" className='h-full  w-full 480px:w-auto  flex flex-col justify-center items-center'>
        <div className='flex flex-col w-full 480px:w-auto px-2 480px:px-0 gap-3'>
        <div className='flex flex-col text-center'>
          <span className='text-[25px]'>Create new account👋</span>
          <span className='text-[12px] text-neutral-400'>please enter details</span>
        </div>
        <div className='flex flex-col   gap-3'>
        {inputs.map((input) => (
          <FormInputs key={input.id} {...input} value={values[input.name as keyof FormValues]} onChange={onChange}/>
        ))}
        </div>
        <div className='mt-3 flex justify-between'>
          <div className='flex gap-2'>
          <input type="checkbox" id="example" className="relative rounded appearance-none w-5 h-5 border focus:outline-none checked:bg-black" />
          <div className='flex flex-row gap-1'>
          <span className='font-light'>I agree to the</span>
          <span className='font-bold'>Terms & Conditions</span>
          </div>
          </div>
        </div>
        <div className='w-full'>
          <button type='submit' className='h-11 w-full 480px:w-[27rem] rounded-md cursor-pointer bg-black '>
            <span className='text-white font-light'>Signup</span>
          </button>
        </div>
        <div className='text-center mt-3 flex justify-center gap-1'>
          <span>Have an account?</span>
          <span className='text-blue-400 cursor-pointer'>Login here</span>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
