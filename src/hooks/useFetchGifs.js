import { useEffect, useState } from 'react'
import { GetGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data : [],
        loading:true
    })

    useEffect( () => {
        GetGifs(category)
            .then(imgs => {

                console.log(imgs);

                setTimeout(() => {
                    setState({
                        data:imgs,
                        loading:false   
                    })
                }, 2000);
                
            });
        ;
    }, [category])


    // setTimeout(() => {
    //     setState({
    //         data:[2,3,4,3,4,56],
    //         loading:false
    //     })
    // }, 3000);


    return state;
}