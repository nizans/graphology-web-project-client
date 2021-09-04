import React, { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const strings = {
  title: 'הכנס תוכן ולסיום לחץ שמור',
  save: 'שמור',
};
const TextEditor = ({ onTextChange }) => {
  const editorRef = useRef(null);
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
