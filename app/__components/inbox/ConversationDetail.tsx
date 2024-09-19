"use client"

import { useRef } from "react";
import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
    
    const messagesDiv = useRef<HTMLDivElement>(null);
    return (
        <>
            <div 
                ref={messagesDiv}
                className="max-h-[400px] overflow-auto flex flex-col space-y-4"
            >
                
                    <div
                        key="1"
                        className={`w-[80%]py-4 px-6 rounded-xl ml-[20%] bg-blue-200`}
                    >
                        <p className="font-bold text-gray-500">Created_by name</p>
                        <p>This is test msg</p>
                    </div>

                
                    <div
                        key="2"
                        className={`w-[80%]py-4 px-6 rounded-xl bg-gray-200`}
                    >
                        <p className="font-bold text-gray-500">Name Msg</p>
                        <p>Reply of test msg</p>
                    </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />

                <CustomButton 
                    label='Send'
                    onClick={() => console.log("click")}
                    className="w-[100px]"
                />
            </div>
        </>
    )
}

export default ConversationDetail;