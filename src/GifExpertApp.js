
import React, {useState} from 'react'
import { AddCategory } from './AddCategory';

import { GifGrid} from './GifGrid';

export const GifExpertApp = () => {
    
    const initialState = ['One punch'];
    const [ categories, setCategories] = useState(initialState);

    return (
        <>        
        <h2> Gif Expert App </h2>  
        <AddCategory setCategories={setCategories} />
        <hr />          
        <ol>
            {
                categories.map( cat => {
                    return <GifGrid 
                            key={cat} 
                            category={cat} />
                })
            }
        </ol>
        </>
    )
}
