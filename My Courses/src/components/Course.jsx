import React, { useState } from 'react'
import CourseList from './CourseList'

export default function Course(courses) {

    return (
        <>
         <div>Course</div>
        {console.log(courses.courses)}
        {courses.courses.map((v,i) =><p key={i}><CourseList name={v} /></p>)}
        </>
  )
}
