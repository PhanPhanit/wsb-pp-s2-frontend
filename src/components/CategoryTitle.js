import React from 'react'
import '../styles/category.css'

const Category = ({title}) => {
    return (
        <section className="wrapper-global category">
            <h2 className="font-cat">{title}</h2>
        </section>
    )
}

export default Category
