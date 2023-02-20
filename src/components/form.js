import React from 'react'

function Form() {


  return (
    <div>
        <form>
            <label htmlFor="food">Food Name</label>
            <input type="text" />
            <label htmlFor="Name">Name</label>
            <input type="text" />
            <label htmlFor="email">Email</label>
            <input type="text" />
            <label htmlFor="contact">Phone Number</label>
            <input type="text" />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form;
