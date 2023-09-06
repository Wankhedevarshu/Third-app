import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3 className='container'>Order is placed</h3>
            <button type="button" className="btn btn-info" onClick={()=>navigate(-1)}>Back
            </button>
        </>
    )
}
