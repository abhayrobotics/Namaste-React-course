# Inception

## creating first program

<!-- ?  ********************************** Using HTML*************************** -->

    <div>
        <h1>Hello React! using HTML</h1>
    </div>

    <div id="root"></div>
    <div id="root2"></div>

    <!-- ?  ********************************** Using JS*************************** -->
    <script>
        const h1 = document.createElement("h1");
        const root = document.getElementById('root')
        h1.innerHTML = "Hello React using JS";
        root.appendChild(h1)

        </script>

<!-- ?  ********************************** Using React*************************** -->

  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

    const heading = React.createElement(
    'h1',
     {id:"heading", xyz:"abhay"},
      "Hello React from React!"
      );

console.log(heading);

## Step to Set up React Project using parcel

- npm init
- npm install react
- npm install react-dom
- npm install -D parcel
- npm parcel -version
- create index.html file
    <body>
      <div id="root">Replace with original content (not to be rendered)</div>
      <script type="module" src="./app.js"></script>
    </body>

- create app.js file
    import React from "react";
    import ReactDOM from 'react-dom';

    //Method-1
    const heading =React.createElement('h1',{},"Hello React using react installation");
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading)

    // *Method-2
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const jsxHeading = <h1>Hello react using JSX syntax</h1>
    root.render(jsxHeading)

- npx parcel index.html


## Redux Toolkit
- install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to the app
- Slice(cartslice)
- dispatch(action)
- selector
