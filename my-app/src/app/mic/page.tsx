import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="antialiased bg-white relative">
      <header className = "container">
        <Navbar />
        <div className="mt-20 text-center">
            <h1>This is the demo page</h1>
            <p>Target here</p>
        </div>
      </header>
    </main>
  )
}

export default page