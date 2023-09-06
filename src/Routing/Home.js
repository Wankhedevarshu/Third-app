import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <section className='container'>
    <h1 className='container'>Home - page</h1>
    <button type="button" className="btn btn-info" onClick={()=>navigate('order-summary')}>Place order</button>
    </section>
    </>
  )
}
