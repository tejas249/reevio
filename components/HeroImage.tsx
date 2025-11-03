import Image from "next/image";
import header from "../public/header.jpg";

export default function Hero() {
  return (
    <div className="mt-10 flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Image
          src={header}
          alt="Header Image"
          className="rounded-3xl shadow-lg shadow-amber-200 object-cover w-3xl"
          height={300}
          width={400}
          priority
        />
      </div>
    </div>
  );
}
