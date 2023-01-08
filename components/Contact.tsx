import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form'

import {toast} from 'react-toastify'
import emailjs from '@emailjs/browser';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message:string
}
type Props = {};

function Contact({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = formData => {
    emailjs
      .send('atayev_ibrahim', 'email.temp.ata', formData, 'gOPS6SHL2BWN26dwS')
      .then(
        (result) => {
          toast.success('Message succesfully sent')
          console.log(result)
        },
        (error) => {
          toast.error('Oops something went wrong... :(');
          console.log(error)
        }
      )
  }
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c2ab94] text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-7 mt-10 pt-20">
        <h4 className="text-lg md:text-2xl font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-3 md:space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#c78039] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-xl">+994 51 454-0666</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#c78039] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-xl">atayev25@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="text-[#c78039] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-xl">Baku, Azerbaijan</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-1 mx-auto  w-fit">
          <div className="flex flex-col  md:flex-row md:space-x-5">
            <input
             {...register('name')}
              className="contactInput" type="text" placeholder="Name" />
            <input
            {...register('email')}
              className="contactInput" type="email" placeholder="Email" />
          </div>
          <input
            {...register('subject')}
            className="contactInput" type="text" placeholder="Subject" />
          <textarea
            {...register('message')}
            className="contactInput" placeholder="Your message" />
          <button
            type="submit"
            className="bg-[#e68b31] py-5 px-10 rounded-md text-black font-bold text-lg animate-pulse">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
