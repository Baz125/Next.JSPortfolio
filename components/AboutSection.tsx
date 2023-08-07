import React from 'react'
import Image from 'next/image'

const skills = [
    { skill: "AWS Lambda" },
    { skill: "Express" },
    { skill: "JavaScript" },
    { skill: "Flux/Redux" },
    { skill: "MongoDB" },
    { skill: "React Native" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "Bootstrap" },
    { skill: "Test-Driven Development" },
    { skill: "Angular" }
  ]

const AboutSection = () => {
  return (
    <section id="about">
          <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
                </h1>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                          Get to know me!
                        </h1>
                        <p>I'm from Dublin, Ireland and have lived in many places around the world, like Singapore, UK and New Zealand. I'm currently based in the state of Baden-Württemberg in Germany. </p>
                        <br />
                        <p>My professional background is in marketing, sales and business development, with a lot of focus on enterprise software. </p>
                        <br />
                        <p>I'm currently on a mission to learn how to put my business experience to work in a more technical setting, check out some of my recent prokects below.</p>
                    </div>
                    <div className="md:w-1/2">
                         <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
                         <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                <p
                                    key={idx}
                                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                >
                                    {item.skill}
                                </p>
                                )
                            })}
                      </div>
                      {/* <Image
                          className="hidden md:block md:relative md:bottom-4 md:left-18 md:z-0 md:pt-16"
                          src="/about_image2.png"
                          alt="cartoon of a coder working at a computer"
                          width={325}
                          height={325}
                      /> */}
                    </div>
              </div>
          </div>
    </section>
      
  )
}

export default AboutSection