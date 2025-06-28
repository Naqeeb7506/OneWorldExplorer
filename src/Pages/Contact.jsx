import React from 'react'
import "../assets/CSS/contact.css"


const Contact = () => {
  const handleFormSubmit = (formData) =>{
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)
    
  }
  return (
    <div className='py-5 container form'>
      <div className="heading text-center">
        <h1>Contact Us</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <form action={handleFormSubmit}>
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" required />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" name='email' placeholder="Enter your email" required />
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Message:</label>
        <textarea class="form-control" id="message" name='message' rows="4" placeholder="Type your message here..."  required></textarea>
      </div>

      <button type="submit" class="btn">Submit</button>
    </form>
      </div>
    </div>
  )
}

export default Contact