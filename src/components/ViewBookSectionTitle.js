import React from 'react'
import '../styles/viewBookTitle.css';
const ViewBookSectionTitle = ({title}) => {
    return (
        <section className="wrapper-global view-book-title">
            <h2 className="font-cat">{title}</h2>
            <hr />
        </section>
    )
}

export default ViewBookSectionTitle
