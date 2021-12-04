import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img className="card-img" src="/assets/bg.jpg" alt="background" height='550' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div classNameName='container'>
                        <h5 className="card-title display-3 fw-bold mb-0 text-black">ALL WHAT YOU NEED</h5>
                        <p className="card-text lead fs-2 text-black">
                            JUST IN ONE PLACE - COLLECT IT NOW !
                        </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home
