import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import '../../styles/dashFrm.css';
import { useActionContext } from '../../contexts/action_context';
import {toast} from 'react-toastify';
import { useDashSlideContext } from '../../contexts/dash_slide_context';

const DashSlideFormUpdate = () => {
    const {closeFormUpdate} = useActionContext();
    const {
        slides,
        updateSlide,
        updateSlideId
    } = useDashSlideContext();
    const [updateSlideLoading, setUpdateSlideLoading] = useState(false);
    const [dataFormSlide, setDataFormSlide] = useState({
        title: "",
        subtitle: "",
        product: "",
        isShow: true
    });


    const handleInputChange = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        if(name==='isShow'){
            setDataFormSlide((oldData)=>{
                return {...oldData, [name]: value=="true"?true:false};
            });
        }else{
            setDataFormSlide((oldData)=>{
                return {...oldData, [name]: value};
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateSlideLoading(true);
        try {
            await updateSlide(dataFormSlide, updateSlideId);
            setUpdateSlideLoading(false);
            toast.success("Create category successfully.");
            closeFormUpdate();
        } catch (error) {
            if(error.response){
                const {msg} = error.response.data;
                toast.error(msg)
            }
            setUpdateSlideLoading(false);
        }
    }

    useEffect(()=>{
        fetchLocalSingleSlide(updateSlideId);
    }, []);

    const fetchLocalSingleSlide = (slideId) => {
        const singleSlide = slides.find(category=>category._id==slideId);
        const {title, subtitle, product: {_id: productId}, isShow} = singleSlide;
        setDataFormSlide({title, subtitle, product: productId, isShow});
    }

  return (
    <form className="dash-form-wrapper w-600">
        <div className="header">
            <h2>Update Slide</h2>
            <AiOutlineClose className="close-icon" onClick={closeFormUpdate} />
        </div>
        <div className="body">
            <div className="input-wrapper">
                <div className="frm-control">
                    <label htmlFor="id">ID</label>
                    <input
                        readOnly
                        type="text"
                        name="id"
                        id="id"
                        placeholder="ID"
                        value={updateSlideId}
                    />
                </div>
                <div className="frm-control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Slide title"
                        onChange={handleInputChange}
                        value={dataFormSlide.title}
                    />
                </div>
                <div className="frm-control">
                    <label htmlFor="subtitle">Subtitle</label>
                    <textarea
                        name="subtitle"
                        id="subtitle"
                        cols="30"
                        rows="8"
                        placeholder="Slide subtitle"
                        onChange={handleInputChange}
                        value={dataFormSlide.subtitle}
                    ></textarea>
                </div>
                <div className="frm-control">
                    <label htmlFor="product">Product ID</label>
                    <input
                        readOnly
                        type="text"
                        name="product"
                        id="product"
                        placeholder="Product ID"
                        onChange={handleInputChange}
                        value={dataFormSlide.product}
                    />
                </div>
                <div className="frm-control">
                    <label htmlFor="isShow">Show</label>
                    <select name="isShow" id="isShow" value={dataFormSlide.isShow} onChange={handleInputChange}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="footer">
            <button type="button" className={updateSlideLoading?"btn-frm btn-cancel disable":"btn-frm btn-cancel"} onClick={closeFormUpdate}>Cancel</button>
            <button type="submit" className={updateSlideLoading?"btn-frm btn-save disable":"btn-frm btn-save"} onClick={handleSubmit}>
                {updateSlideLoading?<div className="button-spinner"></div>:"Save"}
            </button>
        </div>
    </form>
  )
}

export default DashSlideFormUpdate