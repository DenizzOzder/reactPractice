import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './components/Course'

function App() {
  const courseList = ['HTML','CSS','JS','React','Node'];
  return (
    <>
      <Course courses = {courseList}></Course>
    </>
  )
}

export default App
