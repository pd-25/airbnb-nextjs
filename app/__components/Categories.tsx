import Image from "next/image"

function Categories() {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
            <Image src='/category1.jpg' alt="Category1" width={20} height={20}/>
            <span className="text-x5">Category 1</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
            <Image src='/category1.jpg' alt="Category1" width={20} height={20}/>
            <span className="text-x5">Category 1</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
            <Image src='/category1.jpg' alt="Category1" width={20} height={20}/>
            <span className="text-x5">Category 1</span>
        </div>

        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
            <Image src='/category1.jpg' alt="Category1" width={20} height={20}/>
            <span className="text-x5">Category 1</span>
        </div>
    </div>

    
  )
}

export default Categories