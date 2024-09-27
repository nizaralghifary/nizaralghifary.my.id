import React from 'react'
import Image from "next/image"
import Link from "next/link"

import { projects } from "@/constants/index"

export const Project = () => {
  return (
    <div className="max-w-5xl mx-auto sm:p-16 md:p-16 lg:p-16 pb-10 pt-10 px-8">
      <h1 className="sm:text-4xl text-3xl font-semibold sm:leading-snug text-center">
        My{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow font-semibold">
          Projects
        </span>
      </h1>
      
      <p className="text-slate-500 mt-2 leading-relaxed text-center">
        Baru sedikit projeknya
      </p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => {
          let imageSize = { width: 10, height: 10 }

          if (project.name === 'telegram' || project.name === 'mern') {
            imageSize = { width: 20, height: 20 }
          }

          return (
            <div className="sm:w-[300px] w-full flex flex-col items-center" key={project.name}>
              <div className="relative w-16 h-16 flex justify-center items-center">
                <div className="absolute inset-0 rounded-xl" />
                <div className="absolute inset-0 z-10 flex justify-center items-center border rounded-full bg-white">
                  <Image
                    src={project.iconUrl}
                    alt={project.name}
                    width={imageSize.width}
                    height={imageSize.height}
                    className="w-1/2 h-1/2"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col items-center text-center">
                <h4 className="text-xl font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex flex-col items-center gap-2">
                  <Link href={project.link} passHref>
                    <span className="font-semibold text-black-500 cursor-pointer hover:text-blue-500">
                      Live Link
                    </span>
                  </Link>
                  {/* Link Download APK */}
                  {project.download && (
                    <a href={project.download} download>
                      <span className="font-semibold text-black-500 cursor-pointer hover:text-blue-500">
                        Download APK
                      </span>
                    </a>
                  )}
                  {project.code && (
                    <Link href={project.code} passHref>
                      <span className="font-semibold text-black-500 cursor-pointer hover:text-blue-500">
                        Source Code
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}