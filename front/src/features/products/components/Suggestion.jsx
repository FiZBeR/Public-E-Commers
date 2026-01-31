import React from 'react'

const Suggestion = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-7xl">
          <div
            className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-[#1a2e22]"
          >
            <div className="flex flex-col md:flex-row">
              <div
                className="flex flex-1 flex-col justify-center gap-6 p-8 md:p-12 lg:p-16"
              >
                <div className="flex flex-col gap-3">
                  <span
                    className="text-sm font-bold uppercase tracking-wider text-primary"
                    >Editor's Choice</span
                  >
                  <h2
                    className="text-3xl font-bold text-text-main dark:text-white sm:text-4xl italic"
                  >
                    Pick of the Season
                  </h2>
                  <p
                    className="text-lg text-text-sub dark:text-gray-300 leading-relaxed"
                  >
                    Our standout floral dress, handcrafted for sunny days and
                    garden strolls. Features organic cotton, vintage-inspired
                    lace details, and a silhouette that dances with the wind.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div
                    className="flex items-center gap-2 rounded-full bg-background-light px-3 py-1 text-sm text-text-main dark:bg-background-dark dark:text-gray-200"
                  >
                    <span className="material-symbols-outlined text-sm">eco</span>
                    Organic Cotton
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-full bg-background-light px-3 py-1 text-sm text-text-main dark:bg-background-dark dark:text-gray-200"
                  >
                    <span className="material-symbols-outlined text-sm"
                      >favorite</span
                    >
                    Handmade
                  </div>
                </div>
                <div>
                  <button
                    className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-background-dark transition-all hover:bg-[#1fd45e] hover:shadow-lg dark:hover:shadow-primary/20"
                  >
                    Shop the Look
                  </button>
                </div>
              </div>
              <div className="relative min-h-[400px] flex-1 md:min-h-auto">
                <div
                  className="absolute inset-0 h-full w-full bg-cover bg-center"
                  data-alt="Girl in vintage floral dress running in a field"
                  style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAj6fyuNZH15hh0zy66NmHEWBinTGhLXbg9MY71EEgK-hWYFlHVBZ4Yz36xsF524XYDKrqSpDj9ppLp0YUGW6alRpvkQ9ArjkWhpti4ZJOPRfUOi9p-DPHmGLyYRZitjVeH4bRGs1B2LG7N66LLBHVQcCgxJGqZ9xwrgWIhcucU-L6BhDfFcSXeGjREWK3fWga7INL1c8TJjl2NWy0qNckeG-HEHevMg5x2Khei2vNIvv6X94YdNbW9Kl0bo76Tx9sNSFfGDYGuKh0)'}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Suggestion
