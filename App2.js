//inside object we give attribute to our html element.
// heading is a Element it is a Object.Render convert this object to html.
//Below we create parent element in which we are having nested elements, this structure can get complex for that we
//use JSX. So react can be created like this but it gets complicated to write and read code like this.

import React from "react";
import ReactDOM from "react-dom/client"
const parent = React.createElement('div',{id:'parent'},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag")
    ])
)
const heading = React.createElement('h1',{id:"heading"},"Hello from react code");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)