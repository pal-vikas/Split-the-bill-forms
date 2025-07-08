import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {

  let [bill, setBill] = useState('🚘⛱️');
  let {register, handleSubmit, reset} = useForm();
  function submitHandler(data)
  {
        let amount = data.amount;
        let users = data.users;

        setBill(Math.floor((amount/users)))
        reset();
  }

  return (
    <>
      <div className=" mx-auto flex  items-center justify-center h-screen w-full">
        <form action="" className="w-[400px] text-center" onSubmit={handleSubmit(submitHandler)}>
          <h1 className="text-4xl font-black">{bill}</h1>
          <h1 className="text-xl font-bold">Split the bill among your friends!</h1>
          <p className="text-sm text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, blanditiis?</p>
          <div className="mt-4 flex gap-2">
            <input type="text" {...register('amount')} className=" w-1/2 border p-3 outline-none rounded-xl" placeholder="Enter amount" />
            <input type="text" {...register('users')} className="border p-3 outline-none rounded-xl" placeholder="Enter Users" />
          </div>
          <input type="submit" className="mt-2 w-full bg-black p-4 text-white rounded-xl hover:cursor-pointer" value="Split the bill" />
        </form>
      </div>
    </>
  )
}

export default App
