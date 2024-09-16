import React from 'react'
import Image from "next/image"

import { Project } from "@/components/component/Project"
import { Contacts } from "@/components/component/Contacts"
import { skills } from "@/constants/index"

export const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[40px] px-8 min-h-[calc(100vh-80px)]">
      <h4 className="sm:text-4xl text-3xl font-medium sm:leading-snug.">
        Hi, I&apos;m
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-semibold drop-shadow">
          {" "} Nizar Putra Alghifary
        </span>
      </h4>
      <p className="mt-5 flex flex-col gap-3 text-slate-500">
        Seorang siswa SMA yang memiliki hobi coding tepatnya di bidang web development walaupun projeknya masih sedikit soalnya masih pemula
      </p>
      
      <div className="py-10 flex flex-col">
        <h3 className="sm:text-2xl text-lg relative">
          My Skills
        </h3>
        <div className='mt-10 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='w-20 h-20 items-center' key={skill.name}>
              <div className='rounded-full flex justify-center items-center'>
                <Image
                  width="48"
                  height="48"
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Project/>
        <Contacts/>
      </div>
    </div>
  )
}
