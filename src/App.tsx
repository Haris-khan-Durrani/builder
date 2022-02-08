//All imports here

//importing useRef so that we dont always rerender
//whenever user inserts an item to the email

import React, { useRef } from "react";

//email editor library the main library to create custom
import EmailEditor from "react-email-editor";

// Here you can load it only for current component. Works)
// Require customJS.js.d.ts declaration

/* eslint-disable-next-line */
// import customJS from "!!raw-loader!./customJS.js";

//template to use when it load it can be empty
import { template } from "./template";

//all data if needed here

//main app
export const App = () => {
  const emailEditorRef = useRef<any>(null);

  const exportHtml = () => {
    //all useState here

    //other hooks

    //functions
    emailEditorRef.current!.editor.exportHtml((data: any) => {
      //console design as html + object
      const { design, html } = data;
      console.log("exportHtml", html);
      console.log("design", design);
    });
  };

  const onLoad = () => {
    emailEditorRef.current.loadDesign(template);
  };

  return (
    //all returns here
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <hr />

      <EmailEditor
        minHeight={1000}
        options={{
          // customJS: [customJS],
          displayMode: "email",
          features: {
            stockImages: true
          },
          id: "dy-email-editor"
        }}
        projectId={9788}
        ref={emailEditorRef}
        tools={{
          "custom#dy_recommendation": {
            data: {
              html: `<div
               style='
                border: 1px solid #ccc;
                padding: 20px;
                '
               >Custom dynamic HTML</div>`
            },
            position: 0
          }
        }}
        onLoad={onLoad}
      />
    </div>
  );
};
