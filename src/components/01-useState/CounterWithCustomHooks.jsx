import React from 'react'
import { useCounter } from '../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHooks = () => {

    const {state, increment, decrement, reset} = useCounter(200);

    
    return (
        <>
    <h1> Counter With Hook: { state } </h1>
    <hr />

    <button onClick={ () => increment(2) } className='btn btn-outline-success'>+1</button>
    <button onClick={ reset } className='btn btn-outline-warning'> Reset </button>
    <button onClick={ () => decrement(2) } className='btn btn-outline-danger'>-1</button>
    </>
  )
}
