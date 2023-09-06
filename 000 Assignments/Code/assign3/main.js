import React from 'react';
import ReactDOM  from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const header = React.createElement('div',{"class":"title"},
                [React.createElement('h1',{},"H1 Tag"),
                React.createElement('h2',{},"H2 Tag"),
                React.createElement('h3',{},"H3 Tag")])

const header2 = <div className='title'>
                    <h1>H1 tag using jsx</h1>                
                    <h2>H2 tag using jsx</h2>                
                    <h3>H3 tag using jsx</h3>                
                </div>;

const Header3 = ()=>( <div className='title'>
                    <h1>H1 tag using jsx component</h1>                
                    <h2>H2 tag using jsx component</h2>                
                    <h3>H3 tag using jsx component</h3>                
                </div>);



const Final=  ()=> (<>
        {header}
        {header2}
        
        <Header3 />
        <Header3></Header3>
        {Header3()}
        </>
        
)
            

root.render(<Final />);