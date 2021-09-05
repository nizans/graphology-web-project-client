import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
const strings = { enterText: 'הכנס טקסט' };
const TextEditor = ({ onTextChange }) => {
  const editorRef = useRef(null);
  return (
    <>
      <h3 className="_text-3xl">{strings.enterText}</h3>
      <Editor
        apiKey={'bull4brfw8frsrmmmbme09tjrl43xjf55mkrygmkcd2xexig'}
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        onEditorChange={val => {
          onTextChange(val);
        }}
        init={{
          resize: false,
          directionality: 'rtl',
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
            'bold italic | alignleft aligncenter ' +
            'alignright alignjustify lineheight | bullist numlist | ' +
            'removeformat',
          content_css: false,
          content_style: 'body {background-color: #FFFBF7;}',
        }}
      />
    </>
  );
};

export default TextEditor;
