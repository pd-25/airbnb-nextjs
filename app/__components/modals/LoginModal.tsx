'use client';

import Modal from "./Modal";

// import { useState } from "react";
// import { useRouter } from 'next/navigation';
import CustomButton from "../forms/CustomButton";
import useLoginModal from "@/app/hooks/useLoginModal";
// import { handleLogin } from "@/app/lib/actions";
// import apiService from "@/app/services/apiService";

const LoginModal = () => {
    // const router = useRouter()
    const loginModal = useLoginModal();
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
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                {/* onChange={(e) => setEmail(e.target.value)}  */}

                <input  placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                {/* onChange={(e) => setPassword(e.target.value)} */}
            
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

                <CustomButton
                    label="Submit"
                    onClick={() => console.log("click")
                    }
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;