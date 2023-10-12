import React from 'react'

const MovieAPISection = () => {
  return (
    <section className="my-8 pb-8 sm:mx-12 md:pt-8 md:pb-24 lg:px-32 mx-auto">
      <div className="flex flex-col text-center items-center jestify-center">
        <h1 className ="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Movie App Backend</h1>
        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
          The simplest way to interact with this project is through one of the 2 front-end
          projects I built on top of it. Both are available in the portfolio, there's
          Movie App - React Front End and Watchlist, a front-end build with Angular.
          Of course, you can also poke around using Postman - full API documentation
          is avaiable on the Github repo.
        </p>
        <h2 className="text-2xl mt-10 font-bold dark:text-white">
          Project Challenges
        </h2>
        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
          The biggest challenge when building this project was the level of complexity, in terms of
          middleware, cloud services and libraries. This made bug finding and fixing more
          complicated for me than it had ever been. Rremaining cosistent when storing, accessing and
          rendering data across multiple locations was another key challenge.
        </p>
        <h2 className="text-2xl mt-10 font-bold dark:text-white">
          What I learned
        </h2>
        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
          My biggest learning was how to become
          methodical and oragnised when trying to diagnose bugs find solutions. Documenting
          the various potential solutions and attempted solutions was aslo key to being able
          to successfully progress to completion of the project.</p>
        <h2 className="text-2xl mt-10 font-bold dark:text-white">
          Technologies Used</h2>
        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
          NodeJS | Express | MondoDB | Heroku | bcrypt | Bootstrap | Mongoose </p>
        <a
          href="/#projects"
          className="hover:cursor-pointer text-neutral-100 font-semibold px-6 py-3 mt-10 bg-teal-600 rounded shadow hover:bg-teal-700"
          // activeClass="active"
          // spy={true}
          // smooth={true}
          // offset={-100}
          // duration={500}
              > 
            Back to Projects  
        </a>
      </div>
    </section>    
      )
}

export default MovieAPISection


