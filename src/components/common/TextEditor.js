import React, { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const strings = {
  title: 'הכנס תוכן ולסיום לחץ שמור',
  save: 'שמור',
};
const TextEditor = ({ onTextChange }) => {
  const editorRef = useRef(null);
  const handleSave = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const handleImageUpload = async image => {
    console.log(typeof image);
    const data = new FormData();
    data.append('image', image);
    console.log(data.get('image'));
    const response = await fetch('http://localhost:4000/api/articles/upload_image', {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
      }),
      body: data,
    });
    const result = await response.json();
    return result;
  };
  return (
    <div className="h-full flex flex-col justify-center items-start w-full">
      <Editor
        apiKey={'bull4brfw8frsrmmmbme09tjrl43xjf55mkrygmkcd2xexig'}
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        onEditorChange={val => {
          onTextChange(val);
        }}
        init={{
          height: '100%',
          width: '100%',
          menubar: false,
          plugins: [
            'advlist autolink lists link charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify lineheight | bullist numlist | ' +
            'removeformat | image |help',
          content_css: false,
          content_style: 'body {background-color: #FFFBF7;}',
        }}
      />
    </div>
  );
};

export default TextEditor;
