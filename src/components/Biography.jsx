/* eslint-disable react/prop-types */
// import React from 'react'

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="about png" />
      </div>
      <div className="banner">

        <p>Biography</p>
        <h3>Who we are !</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fuga libero asperiores sequi deleniti ut deserunt totam consectetur vero ipsum voluptatibus, maxime quis harum! Iste iure asperiores alias ab quo?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quae debitis magnam est animi totam voluptatem? Nisi soluta ex suscipit eum perferendis excepturi aut. Nostrum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis corrupti dicta unde</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, est fuga! Soluta numquam ipsa at, maiores harum architecto ducimus inventore.</p>
      </div>
    </div>
  )
}

export default Biography
