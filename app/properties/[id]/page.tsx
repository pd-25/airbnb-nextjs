import ReservationSidebar from "@/app/__components/properties/ReservationSidebar";
import Image from "next/image";
import Link from "next/link";

export default function PropertyDetailPage() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/propertyimage.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property Name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        2 guests - 2 bedrooms - 2 bathroom
                    </span>

                    <hr />

                    <Link 
                        href={`/landlords/2`}
                        className="py-6 flex items-center space-x-4"
                    >
                       
                            <Image
                                src="/paulImage.png"
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />

                        <p><strong>Paul Sretomer</strong> is your host</p>
                    </Link>

                    <hr />

                    <p className="mt-6 text-lg">
                    Fresh from headlining festivals and my European tour, I’m bringing my very special show directly to you in an intimate living room environment. Music is my passion, I can’t wait to share that piece of my world with you in a way you’ll never forget. Kick it with me, and my cats. More details coming soon.
                    </p>
                </div>

                <ReservationSidebar />
            </div>
        </main>
  );
}
