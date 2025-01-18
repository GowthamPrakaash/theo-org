import Link from "next/link";

export const Navbar = () => {

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center w-full p-4">
      <nav
        className={`
        mx-4 
        px-6 
        py-2
        rounded-xl
        border 
        border-gray-300
        flex 
        items-center 
        justify-between 
        transition-all 
        duration-300
        bg-gray-400/25 backdrop-blur-xl shadow-sm
      `}
      >
        <div className="flex items-center space-x-8">
          <Link href="/" className="mr-4">
            <img
              src="/images/landing/TheoOrgBGless.png"
              alt="TheoOrg Logo"
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="#"
            className="px-4 py-2 text-gray-700 font-bold rounded-md hover:text-gray-900 hover:bg-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="px-4 py-2 text-gray-700 font-bold rounded-md hover:text-gray-900 hover:bg-gray-200 transition-colors"
          >
            Featured
          </Link>
          <Link
            href="#"
            className="px-4 py-2 text-gray-700 font-bold rounded-md hover:text-gray-900 hover:bg-gray-200 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="px-4 py-2 text-gray-700 font-bold rounded-md hover:text-gray-900 hover:bg-gray-200 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="px-4 py-2 bg-black text-white font-bold rounded-md hover:bg-gray-600 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </nav>
    </div>
  );
};
