import React from "react";

const Banner = () => {
  return (
    <section className="w-full px-4 pt-6 pb-12 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl group">
          <div className="absolute inset-0 z-0">
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              data-alt="Woman in floral dress walking through a sunlit wildflower meadow"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVzleC-UQmp5pLD5Z7tw87cKi8njIYd7IzF11I-SnXm8TjM_MjJQS-hQZME9pbULoo2FnkTvnhQPXVBhL6paJLp8Z17rWOqz7qid1H2CqNs3ZZfwXwS60RoDHv_vZCCwkWymbzh91ulm5sILVy9DV-6EVUIXupiXKjgVO2zXQvpsOOrzKT6I7Vo3qsnOHRgfL23azDotMQ70GQZcYuU6BOzddREGFuiYugLRQyAKCwqwVcAoezC0YrJBPitRrvHEHOKY7dJrXpTho" }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 flex min-h-125 flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/30">
              Spring / Summer 2024
            </span>
            <h1 className="max-w-4xl text-5xl font-medium italic tracking-tight text-white sm:text-6xl md:text-7xl drop-shadow-sm">
              Florece con Nosotros
            </h1>
            <p className="max-w-xl text-lg text-gray-100 sm:text-xl font-light">
              Discover our whimsical summer collection inspired by sunlit
              meadows and gentle breezes.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-background-dark transition-transform hover:scale-105 hover:bg-[#1fd45e] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Explore the Garden
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/30 px-8 text-base font-medium text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
