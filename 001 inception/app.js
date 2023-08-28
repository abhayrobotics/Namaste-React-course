const heading = React.createElement(
    'h1',
     {id:"heading", xyz:"abhay"},
      "Hello React from React!"
      );

console.log(heading); 
// object

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

console.log(root2)

// after render the CreateElement Object is converted to h1 tag
root2.render(heading);