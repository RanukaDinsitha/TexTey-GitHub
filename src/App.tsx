import React, { useState } from "react";
import "./App.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="Editor">
      <div className="App">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}
        />
      </div>
      <div className="content-class">
        <h2>Content</h2>
        <p>{parse(text)}</p>
      </div>
    </div>
  )
}

export default App;
