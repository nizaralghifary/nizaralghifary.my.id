"use client";

import Image from "next/image";
import { Project } from "./Project";
import { Contacts } from "./Contacts";
import { Footer } from "./Footer";
import { FadeInSection } from "./fadeinsection";
import { GradientText } from "./gradient-text";
import { skills } from "@/constants/index";

export const Main = () => {
  return (
    <div 
      suppressHydrationWarning 
      className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[40px] px-8 min-h-[calc(100vh-80px)]"
    >
      <FadeInSection>
        <h1 className="sm:text-4xl text-3xl font-medium sm:leading-snug">
          Hi, I&apos;m{" "} 
          <GradientText>
            Nizar Putra Alghifary
          </GradientText>
        </h1>
      </FadeInSection>

      <FadeInSection>
        <p className="mt-5 text-slate-500">
          Seorang siswa SMA yang memiliki hobi coding tepatnya di bidang web development walaupun projeknya masih sedikit soalnya masih pemula
        </p>
      </FadeInSection>

      <FadeInSection>
        <div className="py-10">
          <h2 className="sm:text-2xl text-lg mb-10 text-center font-semibold">My Skills</h2>
          <div className="flex flex-wrap gap-12 justify-center">
            {skills.map((skill) => (
              <div 
                className="w-20 h-20 flex justify-center items-center" 
                key={skill.name}
              >
                <div className="rounded-full flex justify-center items-center">
                  <Image
                    width={48}
                    height={48}
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
      
      <div>
        <Project />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};