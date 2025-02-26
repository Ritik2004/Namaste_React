import React from 'react';
import ReactDOM from 'react-dom/client'

// const heading = React.createElement(
//     "h1",{id:"heading"},"This is a heading"
// )

//This is a jsx syntx below to which helps to create element same as using createElement    
const jsxheading = <h1 className="heading">This is a jsx syntax, not html</h1>

// jsxheading and heading are same thing 

const Title = () => (
    <h1 className='title'>This is a title of component</h1>
)
//component composition
//This is a functional component
const Headingcomponent = () => (
    <div id='container'>
    {/* <Title/> */}
    {Title()}
        <h1 className='heading'>React functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxheading);
root.render(<Headingcomponent/>)