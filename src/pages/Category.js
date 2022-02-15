import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useCategoryContext} from '../context/category_context';
import {
    Slider,
    CategoryTitle,
    AllFavorBook,
    PaginationReact,
    CategorySection
} from '../components'
import {Error} from '../pages';


function Category() {
    const param = useParams();
    const {category_exist, category, category_loading, setCategoryExist, setCategoryId} = useCategoryContext();
    useEffect(()=>{
        if(!category_loading){
            const categoryExist = category.find(item=>param.id===item._id);
            if(!categoryExist){
                setCategoryExist(false)
                setCategoryId("");
            }else{
                setCategoryExist(true);
                setCategoryId(param.id)
            }
        }
    }, [param, category_loading]);

    if(!category_exist){
        return <Error />
    }
    return (
        <>
            <Slider />
            <CategoryTitle title="Categories"/>
            <CategorySection />
            <CategoryTitle title="All Favorite Books"/>
            <AllFavorBook />
            <PaginationReact />
        </>
    )
}

export default Category
