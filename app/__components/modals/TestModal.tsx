'use client';

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useTestModal from "@/app/hooks/useTestModal";

const TestModal = () => {
    const testModal = useTestModal();

    const content = (
        <>

            <form 
                className="space-y-4"
            >
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input  placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
               

                <CustomButton
                    label="Submit"
                    onClick={() => console.log("click test")
                    }
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={testModal.isOpen}
            close={testModal.close}
            label="Test"
            content={content}
        />
    )
}

export default TestModal;