import React from 'react'

const About = () => {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-16">
    <div className="text-center mb-16">
      <h2
        className="text-5xl md:text-6xl font-extrabold text-navy-charcoal  mb-4"
      >
        Our Story
      </h2>
      <p className="text-xl italic text-sage font-medium">
        Nurturing styles since 2010
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
      <div className="relative group">
        <div
          className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"
        ></div>
        <div
          className="relative overflow-hidden rounded-[2.5rem] shadow-2xl h-[500px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Sun-drenched floral garden"
            style={{ backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuBprKIMf0xVLXNILWv3L_eBrNDDi92XScP_JxmmgTtpLs5_xBGQfUG-p8csaGmKbeqB8jn9abFetaI82AZLidFsIcMVNLFDQbMOPsiDV3Z2Gwcg1amuglex6D2U8d9dO00vQxHdCCFf96aSVKe-P1ctcmryyne2wI0TPT_BmoR7o4vqVd1p-DtniC_79WGuoQLHbRwEwn_-n_D9gAr7hfcoBj9t2vA1fCmfFbhXdh-XHlUxYDCAsQcuqqGZQs0tcsrXUK3Pd2BOz3U)`}}
          ></div>
        </div>
      </div>
      <div
        className="bg-white  p-8 md:p-12 rounded-[2.5rem] soft-green-shadow border border-[#f0f4f2] "
      >
        <span
          className="inline-block px-4 py-1.5 bg-primary/10 text-leaf-green rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >Our Mission</span
        >
        <p
          className="text-lg text-slate-700 leading-relaxed mb-6"
        >
          At Your Garden Basket, we believe that fashion should be as natural
          and breathtaking as a summer meadow in full bloom. Since our humble
          beginnings in 2010, we've been dedicated to creating clothing that
          tells a story.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Our mission is to create sustainable, pattern-focused fashion that
          celebrates the whimsical spirit of the countryside. Every piece is
          designed with love, using fabrics that respect our planet and
          silhouettes that invite you to wander through life's gardens.
        </p>
      </div>
    </div>
    <div className="mb-32">
      <h3
        className="text-3xl font-bold text-center text-navy-charcoal mb-12"
      >
        Our Values
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="flex flex-col items-center text-center p-8 bg-whit rounded-[2rem] border border-[#f0f4f2] transition-transform hover:-translate-y-2"
        >
          <div
            className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-leaf-green  mb-6"
          >
            <span className="material-symbols-outlined text-[32px]"
              >verified</span
            >
          </div>
          <h4
            className="text-xl font-bold text-navy-charcoal  mb-3"
          >
            Quality
          </h4>
          <p className="text-sage ">
            Timeless craftsmanship designed to last through seasons of
            sunshine.
          </p>
        </div>
        <div
          className="flex flex-col items-center text-center p-8 bg-white  rounded-[2rem] border border-[#f0f4f2]  transition-transform hover:-translate-y-2"
        >
          <div
            className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-leaf-green  mb-6"
          >
            <span className="material-symbols-outlined text-[32px]">palette</span>
          </div>
          <h4
            className="text-xl font-bold text-navy-charcoal  mb-3"
          >
            Creativity
          </h4>
          <p className="text-sage ">
            Original botanical patterns inspired by nature's own brushstrokes.
          </p>
        </div>
        <div
          className="flex flex-col items-center text-center p-8 bg-white  rounded-[2rem] border border-[#f0f4f2]  transition-transform hover:-translate-y-2"
        >
          <div
            className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-leaf-green  mb-6"
          >
            <span className="material-symbols-outlined text-[32px]">eco</span>
          </div>
          <h4
            className="text-xl font-bold text-navy-charcoal  mb-3"
          >
            Nature
          </h4>
          <p className="text-sage ">
            Environmentally conscious sourcing that keeps our garden growing.
          </p>
        </div>
      </div>
    </div>
    <div
      className="relative bg-leaf-green rounded-[3rem] p-12 overflow-hidden text-center"
    >
      <div
        className="absolute -top-10 -left-10 size-40 bg-white/5 rounded-full blur-3xl"
      ></div>
      <div
        className="absolute -bottom-10 -right-10 size-60 bg-primary/10 rounded-full blur-3xl"
      ></div>
      <div className="relative z-10">
        <h3 classNameName="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Ready to find your bloom?
        </h3>
        <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
          Join us in celebrating the romantic spirit of sustainable fashion.
        </p>
        <a
          className="inline-flex items-center justify-center px-10 py-5 bg-[#2d5a27] text-white hover:bg-[#2d5a27]/90 font-bold text-xl rounded-full shadow-xl transition-all active:scale-95 group"
          href="#"
        >
          Explore the Garden
          <span
            className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1"
            >arrow_forward</span
          >
        </a>
      </div>
    </div>
  </main>
  )
}

export default About
