import Link from "next/link";
import Categories from "./__components/Categories";
import PropertyList from "./__components/properties/PropertyList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <Categories />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <PropertyList />
      </div>
      2.17.00
     <Link href="https://www.youtube.com/watch?v=psB9vBxPqvE&list=WL&index=5&t=377s" >video</Link>
    </main>
  );
}
