import React from 'react';
import DashBookFormCreate from './DashBookFormCreate';
import DashCategoryFormCreate from "./DashCategoryFormCreate";
import DashSlideFormCreate from './DashSlideFormCreate';


const FormCreate = {
    Category: <DashCategoryFormCreate />,
    Book: <DashBookFormCreate />,
    Slide: <DashSlideFormCreate />
}

export {
    FormCreate
};