import React, {useEffect, useState} from 'react';
import '../styles/dashCategoryPage.css';
import '../styles/dashTable.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import { useDashCategoryContext } from '../contexts/dash_category_context';
import { useActionContext } from '../contexts/action_context';

const CategoryPage = () => {
  const {openFormCreate, openFormUpdate} = useActionContext();
  const [categoryLoading, setCategoryLoading] = useState(true);
  const {
    fetchCategory,
    categories,
    deleteCategory,
    setUpdateCategoryId
  } = useDashCategoryContext();

  useEffect(()=>{
    fetchAllCategory();
  }, []);

  const fetchAllCategory = async () => {
    setCategoryLoading(true);
    await fetchCategory();
    setCategoryLoading(false);
  }

  const handleEditCategory = (categoryId) => {
    openFormUpdate();
    setUpdateCategoryId(categoryId);
  }

  if(categoryLoading){
    return (
      <div className="dash-loading">
        <div className="dash-lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }

  return (
    <div className="dash-cate-wrapper">
      <div className="name-create">
        <h2>Category List</h2>
        <button type="button" className="btn-create" onClick={openFormCreate}>
          <span>Create</span>
          <AiOutlinePlus className="icon" />
        </button>
      </div>
      <div className="cate-table-wrapper">
        <table className="dash-tbl">
          <thead>
            <tr>
              <th width="80">No.</th>
              <th className="title">Name</th>
              <th width="200">Photo</th>
              <th width="80">Show</th>
              <th width="80">Edit</th>
              <th width="80">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              categories.map((category, index)=>{
                const numbering = index + 1;
                return (
                  <tr key={index}>
                    <td>{numbering}</td>
                    <td className="title">{category.name}</td>
                    <td className="photo">
                      <div className="slide-photo">
                        <img src={category.image} alt={category.name} />
                      </div>
                    </td>
                    <td>{category.isShow.toString()}</td>
                    <td><FaEdit className="icon-edit" onClick={()=>handleEditCategory(category._id)} /></td>
                    <td><FaTrashAlt className="icon-delete" onClick={()=>deleteCategory(category._id)} /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default CategoryPage