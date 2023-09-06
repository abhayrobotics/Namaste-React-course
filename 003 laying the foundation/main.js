import React from "react";
import ReactDOM from "react-dom/client";


// ? React Element
const jsxHeading =
    (<h1 className="heading">
        Namaste React using JSX
    </h1>)


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading)

// ? React Component
// 1.Functional Based component ( new)
// 2. class  Based component ( old )

// ? Functional Based component

const Title = () => {
    return <h1 className="title" >Title - Namaste</h1>
};

// ? Function composition- functional ocmponent inside another
const Header = () => {

        return <div className="header">
                    <Title />
                    <h1 className="heading" >Hello Namaste 1</h1>
                    <h1 className="heading" >Hello Namaste 2 </h1>
                    <h1 className="heading" >Hello Namaste 3 </h1>
                </div>

};
root.render(<Header />)
