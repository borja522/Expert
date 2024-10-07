import React from 'react'

const aplicacion = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" className='check'></input>
        <label for="check">
            <div className='btn'>
            <i class="fa fa-bars" id="btn" className='btn'></i>
            </div>
            <div className='cancel'>
            <i class="fa fa-times" id="cancel" className='cancel'></i>
            </div>
        </label>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Massage</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default aplicacion