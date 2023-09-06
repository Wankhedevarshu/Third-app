import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
    return (
        <>
            <div>Product</div>
            <br></br>
            <input type='search' placeholder='Search-product' />

            <nav className='container primary-nav'>
                <Link to="featured" className='a1'>Featured-Product</Link>
                <Link to="new">New-Products</Link>
            </nav>

            <Outlet />
        </>
    )
}
