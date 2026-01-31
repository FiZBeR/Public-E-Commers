import React from 'react'
import Banner from '../../features/publicity/components/Banner'
import Category from '../../features/products/pages/Category'
import Suggestion from '../../features/products/components/Suggestion'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category />
      <section className="w-full py-20 px-4 bg-primary/5 dark:bg-primary/10 flex justify-center">
        <div className="max-w-2xl text-center">
          <p className="text-2xl md:text-3xl font-display italic text-black ">
            "And into the forest I go, to lose my mind and find my soul."
          </p>
          <div className="mt-4 flex justify-center">
            <span className="h-px w-24 bg-primary/50"></span>
          </div>
          <p className="mt-4 text-sm font-sans uppercase tracking-widest text-text-sub dark:text-gray-400">
            John Muir
          </p>
        </div>
      </section>
      <Suggestion/>
    </div>
  )
}

export default Home
