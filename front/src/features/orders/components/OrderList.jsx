import React from "react";

const OrderList = () => {
  return (
    <div className="lg:col-span-8 flex flex-col gap-6">
      {/*<!-- Page Heading -->*/}
      <div className="flex flex-col gap-2 mb-2">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Your Basket
        </h2>
        <p className="text-sage dark:text-gray-400 text-lg">
          Ready for your meadow picnic?
        </p>
      </div>
      {/*<!-- Items List -->*/}
      <div className="flex flex-col gap-4">
        {/*<!-- Item 1 -->*/}
        <div className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-5 bg-white dark:bg-white/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#f0f4f2] dark:border-white/5">
          <div className="flex items-center gap-5 w-full">
            <div className="shrink-0 relative overflow-hidden rounded-xl size-24 bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                data-alt="Close up of floral pattern fabric with sunflowers"
                style={{
                  backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuBprKIMf0xVLXNILWv3L_eBrNDDi92XScP_JxmmgTtpLs5_xBGQfUG-p8csaGmKbeqB8jn9abFetaI82AZLidFsIcMVNLFDQbMOPsiDV3Z2Gwcg1amuglex6D2U8d9dO00vQxHdCCFf96aSVKe-P1ctcmryyne2wI0TPT_BmoR7o4vqVd1p-DtniC_79WGuoQLHbRwEwn_-n_D9gAr7hfcoBj9t2vA1fCmfFbhXdh-XHlUxYDCAsQcuqqGZQs0tcsrXUK3Pd2BOz3U)`,
                }}
              ></div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Sunflower Sundress
              </h3>
              <p className="text-sage text-sm">Size M • Yellow Floral Print</p>
              <p className="text-leaf-green dark:text-primary font-semibold mt-1">
                $45.00
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full sm:w-auto gap-6 mt-4 sm:mt-0">
            {/*<!-- Stepper -->*/}
            <div className="flex items-center bg-background-light dark:bg-black/20 rounded-full p-1 h-10 border border-transparent focus-within:border-primary/30">
              <button className="size-8 flex items-center justify-center rounded-full hover:text-red-500 hover:bg-red-500/20 dark:hover:bg-white/10 text-sage hover:text-leaf-green dark:hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  remove
                </span>
              </button>
              <input
                className="w-10 text-center bg-transparent border-none p-0 text-sm font-semibold text-slate-900 dark:text-white focus:ring-0 appearance-none [-moz-appearance:_textfield] [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none"
                type="number"
                value="1"
              />
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-primary hover:text-white dark:hover:bg-white/10 text-sage hover:text-leaf-green dark:hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
              </button>
            </div>
            {/*<!-- Remove Action -->*/}
            <button className="text-sage hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20">
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
            </button>
          </div>
        </div>
        {/*<!-- Item 2 -->*/}
        <div className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-5 bg-white dark:bg-white/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#f0f4f2] dark:border-white/5">
          <div className="flex items-center gap-5 w-full">
            <div className="shrink-0 relative overflow-hidden rounded-xl size-24 bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                data-alt="White blouse with small daisy embroidery texture"
                style={{
                  backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuAtAq6DEZDBn1xAuy18aeCqu312a1BdCN-CzQq6YbjR2F0f45lWtUN3Gx54alQGrKYA2EFHaXrtrcCvobb-Y1qvIq9ZhzRGf-e8y16QLxcBNzn09i9JAQqPodciFSbhiZ16aMhaMqSZi1y77aNKxQz3cibZLLmrmC16UjpBRKBQBS9UP1F0a_iuMnji_6QRG5I9SNw-VfF2d7XjtR8MX-aSNp0Dtpw9fcu1OHfDyAp32O2RrB3V54M0iekFpeH51FUzdXq0bFJGyzE)`,
                }}
              ></div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Daisy Chain Blouse
              </h3>
              <p className="text-sage text-sm">Size S • White Cotton</p>
              <p className="text-leaf-green dark:text-primary font-semibold mt-1">
                $32.00
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full sm:w-auto gap-6 mt-4 sm:mt-0">
            <div className="flex items-center bg-background-light dark:bg-black/20 rounded-full p-1 h-10">
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-white/10 text-sage hover:text-leaf-green dark:hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  remove
                </span>
              </button>
              <input
                className="w-10 text-center bg-transparent border-none p-0 text-sm font-semibold text-slate-900 dark:text-white focus:ring-0"
                type="number"
                value="1"
              />
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-white/10 text-sage hover:text-leaf-green dark:hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
              </button>
            </div>
            <button className="text-sage hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20">
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
            </button>
          </div>
        </div>
        {/*<!-- Item 3 -->*/}
        <div className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-5 bg-white dark:bg-white/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#f0f4f2] dark:border-white/5">
          <div className="flex items-center gap-5 w-full">
            <div className="shrink-0 relative overflow-hidden rounded-xl size-24 bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                data-alt="Red and white gingham pattern fabric texture"
                style={{
                  backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuB-mqUqXqL80G11Qq4eql5ZiMaheBj30x0sL31aKk4VAyfkkNYpX8P6grPs5kSZO0C9ng8s74p9puuFXH1O5GmPCLR7cm6HFvuGHhgIb2vlT9fvUuUqfN0vNWdO3CTo02icLpTyekyeHPXbWZ4lBShxvT2rrLJm36JWU1P_wGtDg9M2ZqO9Y85s_wugMQUGIcuNnAJEHc3k2ZrrVBABmqcwmIpWcLiiYHKVysOMH8f_C2xZ7pR3o5o7xuyDi0oLtYBBUuwBaA69oXQ)`,
                }}
              ></div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Picnic Gingham Skirt
              </h3>
              <p className="text-sage text-sm">Size M • Red Checkered</p>
              <p className="text-leaf-green dark:text-primary font-semibold mt-1">
                $38.00
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full sm:w-auto gap-6 mt-4 sm:mt-0">
            <div className="flex items-center bg-background-light dark:bg-black/20 rounded-full p-1 h-10">
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-white/10 text-sage hover:text-leaf-green dark:hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  remove
                </span>
              </button>
              <input
                className="w-10 text-center bg-transparent border-none p-0 text-sm font-semibold text-slate-900 dark:text-white focus:ring-0"
                type="number"
                value="1"
              />
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-white/10 text-sage hover:text-leaf-green dark:hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
              </button>
            </div>
            <button className="text-sage hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20">
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- Keep Shopping Link -->*/}
      <div className="mt-4">
        <a
          className="inline-flex items-center gap-2 text-leaf-green dark:text-primary font-medium hover:underline decoration-wavy underline-offset-4"
          href="#"
        >
          <span className="material-symbols-outlined text-[20px]">
            arrow_back
          </span>
          Keep Shopping
        </a>
      </div>
    </div>
  );
};

export default OrderList;
