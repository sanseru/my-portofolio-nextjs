import React from 'react'
import { aboutMe, skills, professionalData } from '@/data/page-data'
import AboutMe from "./component/about-me"
import ProfessionalExperience from "./component/professionalExperiance"

function page() {
  return (
    <div>
      <AboutMe data={aboutMe} skills={skills}/>
      <ProfessionalExperience data={professionalData}/>
    </div>
  )
}

export default page