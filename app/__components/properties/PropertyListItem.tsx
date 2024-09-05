import Image from "next/image";

export default function PropertyListItem() {
  return (
    <div className="curser-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/propertyimage.jpg"
          alt="property1"
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">Property Name</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-grey-500"><strong>$500</strong>per night</p>
      </div>
    </div>
  );
}
