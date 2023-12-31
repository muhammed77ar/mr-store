
export default function Hero() {
  const scroll = () => {
    window.scrollBy(0,600)
  };
  return (
    <section id="scrollTarget" className=" h-[600px] relative bg-cover bg-center bg-no-repeat bg-gray-500 bg-blend-multiply" style={{ backgroundImage: 'url("../images/hero.jpg")' }}>
      <div class="px-4 mx-auto max-w-screen-xl flex h-full flex-col justify-center items-center">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to <span className= "text-cyan-300">MAR</span> store</h1>
        <p class="mb-8 text-gray-300 flex flex-col w-full text-center lg:w-[700px] justify-center items-center">MAR store beckons you to a world of innovation and style. Explore our curated collection, where every item is a testament to quality and sophistication. Elevate your lifestyle with us – invest in products that inspire, excite, and bring lasting joy to your everyday moments.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button onClick={scroll} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Go Shopping
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
    </div>
    </section>
  )
}
