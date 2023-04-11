import React from 'react'
import { aboutMe, skills, professionalData } from '@/data/page-data'
import AboutMe from "./component/about-me"
import ProfessionalExperience from "./component/professionalExperiance"
import sharp from "sharp";

function page() {
  sharp("./public/images/haris.webp").resize(300, 300).toFile("./public/images/haris_sharp.webp");

  return (
    <div>
      <AboutMe data={aboutMe} skills={skills}/>
      <ProfessionalExperience data={professionalData}/>
    </div>
  )
}

export default page