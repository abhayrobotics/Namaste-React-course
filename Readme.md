# inception
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
  