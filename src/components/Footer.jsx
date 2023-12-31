import { Link } from "react-router-dom";


export default function Footer() {
  const scrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer class=" bg-black w-full mt-80">
      <div class="w-full max-w-screen-xl mx-auto p-4">
        <div class=" flex justify-center items-center">
          <Link to={"/"} onClick={scrollHome} class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="../images/logo-no-background.svg" class=" w-[90px] h-[90px]" alt="Flowbite Logo" />
          </Link>
        </div>
        <hr class="my-6 border-gray-200" />
        <span class=" mb-2 flex justify-center items-center text-gray-200">© 2023 MAR Store. All Rights Reserved.</span>
      </div>
    </footer>


  )
}
