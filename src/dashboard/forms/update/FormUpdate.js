import React from 'react';
import DashBookFormUpdate from './DashBookFormUpdate';
import DashCategoryFormUpdate from './DashCategoryFormUpdate';
import DashSlideFormUpdate from './DashSlideFormUpdate';
import DashOrderFormUpdate from './DashOrderFormUpdate';


const FormUpdate = {
    Category: <DashCategoryFormUpdate />,
    Book: <DashBookFormUpdate />,
    Slide: <DashSlideFormUpdate />,
    Order: <DashOrderFormUpdate />
}

export {
    FormUpdate
};