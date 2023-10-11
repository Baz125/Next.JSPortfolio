import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from "./SlideUp"

const projects = [
    {
      name: "Movie App API",
      description: "This fully functional RESTful API provides users with secure authorization, access to interesting data about movies and allows them to create a simple profile. It was an exercise in advanced backend development.",
      image: "/mongo-node-express.jpg",
      github: "https://github.com/Baz125/movie-app",
    },
    {
        name: "Movie App - React Front End",
        description: "Built on MERN stack and demonstrating advanced client side programming, this is a Single Page Web Application allowing users to interact with the data in the Movie App API.",
        image: "/myflix-project.png",
        github: "https://github.com/Baz125/myFlix-client",
        link: "https://movieapp.barrymcguirk.com/",
      },
    {
      name: "meetApp",
      description:
        "meetApp is a progressive web application that allows users to view events, pulled from Google Calendar API, in their location. This project was an exercise in creating serverless functions on AWS Lambda, using oAuth2 and data visualization.",
      image: "/meetApp-project.png",
      github: "https://github.com/Baz125/meetApp",
      link: "https://baz125.github.io/meetApp/",
    },
    {
        name: "chinwag",
        description:
            "chinwag is a React Native Mobile Chat App, it provides users with a chat interface inside a single chat room, and functionality to share images, audio and location. It uses Google Firebase Realtime Database.",
        image: "/chinwag.jpg",
        github: "https://github.com/Baz125/ChatApp",
        definition: "to chat idly,"
    },
    {
        name: "Pokedex",
        description: "Building this pokedex was a fun way to learn about DOM interaction, Ajax and asychronous behaviour. Built using Bootstrap and jQuery.",
        image: "/pokedex-project.png",
        github: "https://github.com/Baz125/Pokedex-Project",
        link: "https://baz125.github.io/Pokedex-Project/",
      },
    {
        name: "WatchList",
        description:
            "WatchList is an alternative front-end for the Movie API built in Angular. With a slightly simpler UI, it was an opportunity to learn the Angular framework",
        image: "/watchlist.png",
        github: "https://github.com/Baz125/WatchList_Angular_Client",
        link: "https://baz125.github.io/WatchList_Angular_Client/welcome",
    }
  ]

const ProjectsSection = () => {
  return (
        <section id="projects">
            <h1 className="text-center font-bold text-4xl">Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
            </h1>
          
          <div className="flex flex-col space-y-28">
              {projects.map((project, idx) => {
                  return (
                      <div key={idx}>
                            <SlideUp offset="300px 0px -300px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className="mt-8 md:w-1/2">
                                        
                                      {project.link ? (
                                          <a href={project.link} target="_blank" rel="noreferrer">
                                              <Image
                                                  src={project.image}
                                                  alt=""
                                                  width={1000}
                                                  height={1000}
                                                  className="rounded-xl shadow-xl hover:opacity-70"
                                              />
                                          </a>) : <Image
                                                        src={project.image}
                                                        alt=""
                                                        width={1000}
                                                        height={1000}
                                                        className="rounded-xl shadow-xl hover:opacity-70"
                                                        />
                                      }
                                    </div>
                                    <div className="mt-12 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        
                                          {project.definition ? (
                                            <div>
                                                <p><em>definition:</em> chinwag</p>
                                                <p><strong>British English, Hiberno English</strong> (<sup>verb</sup> -wagged, -wagging)</p>
                                                <p>(ˈtʃɪnˌwæɡ); slang</p>
                                                <p><strong>INTRANSITIVE VERB</strong></p>
                                                <p><em>to chat idly; gossip</em></p>
                                            </div>
                                      ) : null}
                                      <div className="flex flex-row align-bottom py-10 space-x-4">
                                            <a href={project.github} target="_blank" rel="noreferrer">
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </a> 
                                          {project.link ? (
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                              </a>
                                          ) : null}
                                          </div>
                                        
                                    </div>
                                </div>
                            </SlideUp>
                        </div>                          
                  )
              })}
          </div>
        </section>
  )
}

export default ProjectsSection