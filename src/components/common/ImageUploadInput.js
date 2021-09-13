import { SectionHeightContext } from 'context/sectionHeightContext';
import useModal from 'hooks/useModal';
import React from 'react';
import { useContext } from 'react';
import Modal from './Modal';

const strings = { uploadImage: 'העלה תמונה' };

const ImageUploadInput = ({ onImageChange, images = [], setImages }) => {
  const { windowHeight, windowWidth } = useContext(SectionHeightContext);

  const createImageArray = files => {
    let arr = [];
    for (const img of files) {
      arr.push(img);
    }
    return arr;
  };

  const { isShowing, toggle } = useModal();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle}>
        <div
          dir="rtl"
          className="mx-4 bg-background rounded-lg flex justify-start p-8"
          style={{ height: windowHeight * 0.7, width: windowWidth * 0.7 }}>
          <div className="flex flex-col">
            <label htmlFor="image" className="_text-3xl">
              {strings.uploadImage}
            </label>
            <input multiple type="file" name="image" onChange={e => onImageChange(createImageArray(e.target.files))} />
          </div>
          <div className="grid grid-cols-3">
            {images.map((img, i) => (
              <div>
                {img instanceof File || img instanceof Blob ? (
                  <img alt="" src={URL.createObjectURL(img)} />
                ) : (
                  <img alt="" src={img} key={i} />
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <button type="button" onClick={toggle} className="button">
        {strings.uploadImage}
      </button>
    </>
  );
};

export default ImageUploadInput;
