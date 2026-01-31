import React from 'react'

const Category = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-7xl flex flex-col gap-10">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl"
              >local_florist</span
            >
            <h2
              className="text-3xl font-bold text-text-main "
            >
              Featured Collections
            </h2>
            <p className="text-text-sub ">
              Curated styles for your garden adventures
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/*<!-- Collection 1 -->*/}
            <div className="group cursor-pointer">
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#e2e8e4] bg-white p-3 shadow-sm "
              >
                <div className="h-full w-full overflow-hidden rounded-lg">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    data-alt="Close up of floral pattern fabric in sunlight"
                    style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAyTxekDWjSFDLgRD4Gb8ZwvadU98cc4k3TMH1C5kYFz__gvgbeCJzVX0OVN2TtCSnl4SnqwPW2D8G1Hxi04sS9EqkbqBLxnpAYVnKGFi73IKDsGFVkAgP4fTzL1Z6mhIJ182wKiyCThGGmR6Gj3WvzDxlMz5EmMDKWoHq5z3vxIsfYIsnY4cF2Yor-TpigKRsVcOIQ0nR81LM5v35w3C04JyUG__p8-EReUnIIT6zhwkB3A8JDOmdPAPj-qGCiflWILqx_s2WjDrM)'}}
                  ></div>
                </div>
                {/*<!-- Floral Frame decoration (Corner) -->*/}
                <div className="absolute top-2 left-2 text-primary/40">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewbox="0 0 24 24"
                    width="24"
                  >
                    <path d="M7 7h10v10"></path>
                  </svg>
                </div>
                <div
                  className="absolute bottom-2 right-2 text-primary/40 rotate-180"
                >
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewbox="0 0 24 24"
                    width="24"
                  >
                    <path d="M7 7h10v10"></path>
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-text-main ">
                  Estampados de Campo
                </h3>
                <p className="text-sm text-text-sub ">
                  Field Patterns
                </p>
              </div>
            </div>
            {/*<!-- Collection 2 -->*/}
            <div className="group cursor-pointer">
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#e2e8e4] bg-white p-3 shadow-sm "
              >
                <div className="h-full w-full overflow-hidden rounded-lg">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    data-alt="Woman wearing a white linen blouse in a garden"
                    style={{ backgroundImage : 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDP6k-IYRc46s96gZHIP6pp9hT9EX5X7nFIqZHfarxAKewwetd5C5hEG3G8hyxAKluskUrhGx5MFByvY7pfrG_hlkR5tV777SgQNBLW5S0qv58UWyaenoiWVJnhZMExVRXzF23SSQqiVRMqFVreJhY-fc426IPL8NWcwiXK01fVvIRwnKgoBgxfWd2rpuWeCWieR5V-4AZ6hEqxsvsozyAJu6Js9BQ0vXeRLA-skX0YOxvfeyZF1Xj_3Fwl2lrEuy1sL-VN1m2CvVM)'}}
                  ></div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-text-main ">
                  Blusas de Jardín
                </h3>
                <p className="text-sm text-text-sub ">
                  Garden Blouses
                </p>
              </div>
            </div>
            {/*<!-- Collection 3 -->*/}
            <div className="group cursor-pointer">
              <div
                className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#e2e8e4] bg-white p-3 shadow-sm "
              >
                <div className="h-full w-full overflow-hidden rounded-lg">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    data-alt="Straw hat with ribbon on grass"
                    style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBOKgCH4mrxzjwYHUOLHaA94tJZf1yp_xZnMs5vTgwxD8mWX6dTHNtBqjd_-9Nj1PxOYorHNWVEJ87MjeGpNT-Cj_RWEEYCk34SJ-U7yh8TtqfROTBDhlPT1-QCLNxmjPR3v9RAr05ZTfev9oaPbrONmolOZwkoH8O5QormCQos81-7-4YObVc-gkkNxWS2vAfYAsemuCat1XvWPfSsBia946adIUPPlM8jpj8xHXuNI4r8vrYIplu-tVkVFkMF5Nsizbn80hI03eI)'}}
                  ></div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-medium text-text-main ">
                  Accesorios Silvestres
                </h3>
                <p className="text-sm text-text-sub ">
                  Wild Accessories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Category
