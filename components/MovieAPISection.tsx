import React from 'react'
import Image from 'next/image'

const MovieAPISection = () => {
  return (
    <section id="about">
          <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">Movie API Project
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
                </h1>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                          Movie API Project
                        </h1>
                        <p>{"1st line"} </p>
                        <br />
                        <p>{"2nd line"}</p>
                        <br />
                        <p>{"3rd line"}</p>
                    </div>
                    <div className="md:w-1/2">
                         <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Technologies used</h1>
                    </div>
              </div>
          </div>
    </section>
      
  )
}

export default MovieAPISection