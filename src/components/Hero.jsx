/* eslint-disable react/prop-types */
// import React from 'react'

const Hero = ({ title, imageUrl }) => {
    return (
        <div className='hero container'>
            <div className="banner">
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et labore est eligendi, qui quis, cupiditate ipsum repudiandae distinctio exercitationem voluptate fugiat non natus molestiae voluptates, nobis totam quam quos.</p>
            </div>
            <div className="banner">
                <img src={imageUrl} alt="Hero" className="animated-image" />
                <span>
                    <img src="/Vector.png" alt="vector" />
                </span>
            </div>
        </div>
    )
}

export default Hero
