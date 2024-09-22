"use client";

import Modal from "./Modal";

// import { useState } from "react";
// import { useRouter } from 'next/navigation';
import CustomButton from "../forms/CustomButton";
import useSignUpModal from "@/app/hooks/useSignUpModal";
// import { handleLogin } from "@/app/lib/actions";
// import apiService from "@/app/services/apiService";

const SignUpModal = () => {
  // const router = useRouter()
  const signupModal = useSignUpModal();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errors, setErrors] = useState<string[]>([]);

  // const submitLogin = async () => {
  //     const formData = {
  //         email: email,
  //         password: password
  //     }

  // }

  const content = (
    <>
      <form
        // action={submitLogin}
        className="space-y-4"
      >
        <input
        //   onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
        //   onChange={(e) => setPassword1(e.target.value)}
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
        //   onChange={(e) => setPassword2(e.target.value)}
          placeholder="Repeat password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        {/* {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    )
                })} */}

        <CustomButton label="Submit" onClick={() => console.log("click")} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign Up"
      content={content}
    />
  );
};

export default SignUpModal;
