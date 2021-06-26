import React, {useState} from 'react';
import AddCategory from './components/AddCatgory';
import GiftGrid from './components/GiftGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["Inteligencia Artificial"])

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />

            <ol>
                {
                    categories.map(value => <GiftGrid key={value} category={value} />)
                }
            </ol>
        </>
    )
}

export default GiftExpertApp