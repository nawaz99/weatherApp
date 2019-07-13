import React from 'react'

const Form = ({getWeather}) => {
 return (
    <form onSubmit={getWeather}>
        <input type='text' name='city' placeholder='City...' />
        <input type='text' name='country' placeholder='Country...' />
        <button type='submit'>Get Weather</button>
    </form>
    )
}

export default Form;
