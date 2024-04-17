import React from "react";
import ReactDOM from 'react-dom';

//* Method-1
// const heading =React.createElement('h1',{},"Hello React using react installation");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)

// *Method-2

const root = ReactDOM.createRoot(document.getElementById('root'));
const jsxHeading = <h1>Hello react using JSX syntax</h1>
root.render(jsxHeading)