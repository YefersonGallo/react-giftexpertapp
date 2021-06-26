import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleSumbit = (e) =>{
        e.preventDefault()
        setCategories(cats => [inputValue, ...cats])
        setInputValue('')
    }


    return (
        <form onSubmit={handleSumbit}>
            <input 
                type={"text"} 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
