import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./styles/upload.css";

export default (props) => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  function handleSelectImage(event) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  const onSubmit = (data) => {
    const { title, text } = data;

    const token = window.sessionStorage.getItem("token");
    console.log(token);
    const formData = new FormData();

    formData.append("title", title);
    formData.append("text", text);

    images.forEach((image) => {
      formData.append("images", image);
    });

    console.log({ title, text, images });
    axios
      .post("http://localhost:3001/api/post/create/", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        alert("Successful post");
      })
      .catch(function (error) {
        alert("User is not authorized");
      });

    history.push("/posts");
  };

  return (
    <div id="page-upload">
      <main>
        <form className="upload-form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Dados</legend>

            <div className="input-block">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                ref={register({ required: true, maxLength: 3, maxLength: 20 })}
              />
              {errors.title && errors.title.type === "required" && (
                <p>This field is required</p>
              )}
              {errors.title && errors.title.type === "minLength" && (
                <p>This field is required min length of 3</p>
              )}
              {errors.title && errors.title.type === "maxLength" && (
                <p>This field is required max length of 20</p>
              )}
            </div>

            <div className="input-block">
              <label htmlFor="text">Text</label>
              <input
                id="text"
                maxLength={300}
                placeholder="Max 300 characters"
                name="text"
                ref={register}
              />
            </div>

            <div className="input-block">
              <label>Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => {
                  return <img key={image} src={image} alt={image} />;
                })}
                <label className="new-image" htmlFor="image">
                  <FiPlus size={24} color="#01807E"></FiPlus>
                </label>
              </div>

              <input onChange={handleSelectImage} type="file" id="image" />
            </div>
          </fieldset>
          <button type="submit" className="button-submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
};
