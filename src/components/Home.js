import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div className="container">
            
            <img className="w-100 home-image" src="https://www.amzonestep.com/blog/wp-content/uploads/Header.jpg" alt="" />
            
            <div className="mx-3">

                <div className="row g-4">
                    <div className="col-sm-6 col-12">
                        <Product id={1} title="Lorem ipsum dolor sit amet consectetur" price={20.22} image="https://m.media-amazon.com/images/I/71WtwEvYDOS._AC_SY200_.jpg" rating={3}/>
                    </div>
                    <div className="col-sm-6 col-12">
                    <Product id={6} title="Lorem ipsum dolor sit amet consectetur" price={20.22} image="https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg" rating={5}/>
                    </div>
                </div>

                <div className="row mt-4 g-4 g">
                    <div className="col-sm-6 col-12 col-md-6 col-lg-4">
                    <Product id={2} title="Lorem ipsum dolor sit amet consectetur" price={20.22} image="https://m.media-amazon.com/images/I/61bwo1XYdES._AC_UL320_.jpg" rating={4}/>
                    </div>
                    <div className="col-sm-6 col-12 col-md-6 col-lg-4">
                    <Product id={3} title="Lorem ipsum dolor sit amet consectetur" price={20.22} image="https://m.media-amazon.com/images/I/81npNMXFqXL._AC_UL320_.jpg" rating={3}/>
                    </div>
                    <div className="col-sm-8 mx-auto col-12 col-lg-4">
                    <Product id={4} title="Lorem ipsum dolor sit amet consectetur" price={20.22} image="https://m.media-amazon.com/images/I/71-yofISXUL._AC_UL320_.jpg" rating={1}/>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                    <Product id={5} title="Lorem ipsum dolor sit amet consectetur" price={20.22} image="https://m.media-amazon.com/images/I/716r6a-4MDL._AC_UL320_.jpg" rating={2}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
