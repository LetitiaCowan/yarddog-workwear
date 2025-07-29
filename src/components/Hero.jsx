import React from "react";
export function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Construction workers"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mt-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional Workwear That Works As Hard As You Do
          </h1>
          <div className="flex flex-row gap-4 w-full max-w-[1400px]">
          <p className="text-xl lg:text-1xl mb-8 text-[#f4ebd0]">
            Born in the backyards, sheds, and worksites of Australia, Yard Dog
            Workwear is built for the men and women who stay loyal to the job —
            rain, dust, or 40 in the shade. Like the yard dog that never strays,
            our gear’s made to be tough, ready, and always on deck. No gimmicks.
            Just gear that works as hard as you do.
          </p>
          <p className="text-xl lg:text-1xl mb-8 text-[#f4ebd0]">
            For the women on the tools, in the yards, and on the frontlines —
            Yard Dog Workwear builds gear that’s made to grind, made to last,
            and made to fit. Because hard work doesn’t care who’s wearing the
            boots.
          </p>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#b68d40] hover:bg-[#d6ad60] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Shop Now
            </button>
            <button className="border-2 border-[#f4ebd0] text-[#f4ebd0] hover:bg-[#f4ebd0] hover:text-[#122620] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
