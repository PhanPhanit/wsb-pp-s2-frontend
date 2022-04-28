import React, {useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import '../../styles/dashFrm.css';
import PhotoUpload from '../../../images/photo-upload.jpg';
import UploadLoading from '../../../images/upload-loading.gif';
import { useActionContext } from '../../contexts/action_context';
import { useDashBookContext } from '../../contexts/dash_book_context';
import { uploadPhotoCloud } from '../../../UrlEndPoint';
import axios from 'axios';
import {toast} from 'react-toastify';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import { productUrl } from '../../../UrlEndPoint';

const DashBookFormCreate = () => {
    const {closeFormCreate} = useActionContext();
    const {categories, createProduct} = useDashBookContext();
    const [createProductLoading, setCreateProductLoading] = useState(false);
    const [uploadImage, setUploadImage] = useState([
        {
            id: 1,
            image: "",
            loading: false
        }
    ]);
    const [dataFormProduct, setDataFormProduct] = useState({
        name: "",
        price: "",
        discount: "",
        author: "",
        publisher: "",
        genre: "",
        language: "",
        country: "",
        published: "",
        description: "",
        category: "",
        isShow: true
    });


    const handleInputChange = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        if(name==='isShow'){
            setDataFormProduct((oldData)=>{
                return {...oldData, [name]: value=="true"?true:false};
            });
        }else{
            setDataFormProduct((oldData)=>{
                return {...oldData, [name]: value};
            });
        }
    }
    const handleUploadImage = async (e) => {
        const id = e.currentTarget.dataset.id;
        const formData = new FormData();
        formData.append("images", e.target.files[0]);
        setUploadImage(oldData=>{
            const tempOldData = oldData.map(item=>{
                if(item.id===Number(id)){
                    item.loading = true;
                }
                return item;
            });
            return tempOldData;
        });
        try {
            const response = await axios({
                method: "post",
                url: uploadPhotoCloud,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });
            const imageUrl = response.data.images[0];
            setUploadImage(oldData=>{
                const tempOldData = oldData.map(item=>{
                    if(item.id===Number(id)){
                        item.image = imageUrl;
                    }
                    return item;
                });
                return tempOldData;
            });
        } catch (error) {
            console.log(error);
        }
        setUploadImage(oldData=>{
            const tempOldData = oldData.map(item=>{
                if(item.id===Number(id)){
                    item.loading = false;
                }
                return item;
            });
            return tempOldData;
        });
        e.target.value = "";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCreateProductLoading(true);
        const images = uploadImage.filter(item=>item.image!=="").map(item=>item.image);
        if(images.length===0){
            toast.error("Please upload image at leate one image.");
            return;
        }
        const tempDataFormProduct = {
            ...dataFormProduct,
            image: images,
            price: Number(dataFormProduct.price).toFixed(2),
            discount: Number(dataFormProduct.discount).toFixed(2)
        };
        try {
            await createProduct(productUrl, tempDataFormProduct);
            setCreateProductLoading(false);
            closeFormCreate();
            toast.success("Create book successfully.");
        } catch (error) {
            if(error.response){
                const {msg} = error.response.data;
                toast.error(msg)
            }
            setCreateProductLoading(false);
        }
    }

    const handleAddUploadPhoto = () => {
        const addImageId = uploadImage.length + 1
        const singleImage = {
            id: addImageId,
            image: "",
            loading: false
        }
        setUploadImage([...uploadImage, singleImage]);
    }
    const handleDeleteUploadPhoto = (id) => {
        setUploadImage(oldData=>{
            const tempOldData = oldData.filter(item=>item.id!==id);
            return tempOldData;
        });
    }

  return (
      <div className="w-100 h-100 overflow-y-scroll">
        <form className="dash-form-wrapper box-center w-700">
            <div className="header">
                <h2>Create New Product</h2>
                <AiOutlineClose className="close-icon" onClick={closeFormCreate} />
            </div>
            <div className="body">
                <div className="input-wrapper">
                    <div className="frm-control">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name of category"
                            onChange={handleInputChange}
                            value={dataFormProduct.name}
                        />
                    </div>

                    <div className="d-flex gap-10">
                        <div className="frm-control">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Price"
                                onChange={handleInputChange}
                                value={dataFormProduct.price}
                            />
                        </div>
                        <div className="frm-control">
                            <label htmlFor="discount">Discount</label>
                            <input
                                type="number"
                                name="discount"
                                id="discount"
                                placeholder="Discount"
                                onChange={handleInputChange}
                                value={dataFormProduct.discount}
                            />
                        </div>
                    </div>
                    <div className="d-flex gap-10">
                        <div className="frm-control">
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="Author"
                                onChange={handleInputChange}
                                value={dataFormProduct.author}
                            />
                        </div>
                        <div className="frm-control">
                            <label htmlFor="publisher">Publisher</label>
                            <input
                                type="text"
                                name="publisher"
                                id="publisher"
                                placeholder="Publisher"
                                onChange={handleInputChange}
                                value={dataFormProduct.publisher}
                            />
                        </div>
                    </div>
                    <div className="d-flex gap-10">
                        <div className="frm-control">
                            <label htmlFor="genre">Genre</label>
                            <input
                                type="text"
                                name="genre"
                                id="genre"
                                placeholder="Genre"
                                onChange={handleInputChange}
                                value={dataFormProduct.genre}
                            />
                        </div>
                        <div className="frm-control">
                            <label htmlFor="language">Language</label>
                            <input
                                type="text"
                                name="language"
                                id="language"
                                placeholder="Language"
                                onChange={handleInputChange}
                                value={dataFormProduct.language}
                            />
                        </div>
                    </div>

                    <div className="d-flex gap-10">
                        <div className="frm-control">
                            <label htmlFor="published">Published</label>
                            <input
                                type="text"
                                name="published"
                                id="published"
                                placeholder="Published"
                                onChange={handleInputChange}
                                value={dataFormProduct.published}
                            />
                        </div>
                        <div className="frm-control">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                name="country"
                                id="country"
                                placeholder="country"
                                onChange={handleInputChange}
                                value={dataFormProduct.country}
                            />
                        </div>
                    </div>

                    <div className="frm-control">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" value={dataFormProduct.category} onChange={handleInputChange}>

                            <option value="">----- Select -----</option>
                            {
                                categories.map((category, index)=>{
                                    const {_id: id, name} = category;
                                    return (
                                        <option key={index} value={id}>{name}</option>
                                    );
                                })
                            }
                        </select>
                    </div>

                    <div className="frm-control">
                        <label htmlFor="isShow">Show</label>
                        <select name="isShow" id="isShow" onChange={handleInputChange} value={dataFormProduct.isShow}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    </div>

                    <div className="frm-control">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Description"
                            cols="30"
                            rows="10"
                            onChange={handleInputChange}
                            value={dataFormProduct.description}
                        ></textarea>
                    </div>
                </div>
                <div className="upload-photo">
                    <h3>File</h3>
                    <div className="img-box-wrapper">
                        {
                            uploadImage.map(item=>{
                                const {id, image, loading} = item;
                                return (
                                    <div key={id} className="img-box" style={{ backgroundImage: `url(${image || PhotoUpload})` }}>
                                        {loading && <img src={UploadLoading} alt="upload loading" className="upload-loading" />}
                                        <input
                                            type="file"
                                            name="file"
                                            id="file"
                                            onChange={handleUploadImage}
                                            data-id={id}
                                        />
                                        <AiOutlineClose className="delete-photo" onClick={()=>handleDeleteUploadPhoto(id)} />
                                    </div>
                                )
                            })
                        }

                        {
                            uploadImage.length<5 && (
                                <div className="d-flex align-item-center">
                                    <BsFillPlusCircleFill className="add-photo" onClick={handleAddUploadPhoto} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className={createProductLoading?"btn-frm btn-cancel disable":"btn-frm btn-cancel"} onClick={closeFormCreate}>Cancel</button>
                <button type="submit" className={createProductLoading?"btn-frm btn-save disable":"btn-frm btn-save"} onClick={handleSubmit}>
                    {createProductLoading?<div className="button-spinner"></div>:"Save"}
                </button>
            </div>
        </form>
    </div>
  )
}

export default DashBookFormCreate;