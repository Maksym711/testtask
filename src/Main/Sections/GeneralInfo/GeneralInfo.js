import React from 'react'
import './GeneralInfo.css'
import Button from '../../../components/Button'

export default function GeneralInfo() {
  return (
    <section className='general-info'>
        <div className="content-general-info">
            <h1>Test assignment for front-end developer</h1>
            <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            <Button 
              backgroundColor='#F4E041' 
              backgroundHover='#FFE302' 
              color='black' 
              margin='auto'
              small
              onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
            >
                Sign up
            </Button>
        </div>
    </section>
  )
}
