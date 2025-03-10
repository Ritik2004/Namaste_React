import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestroMenu from './components/ResrtroMenu';
import { lazy,Suspense } from 'react';
import UserContext from './utils/UserContext';

// import Grocery from './components/Grocery';
const Grocery = lazy(()=>import("./components/Grocery"))

const Foodcart = () => {
    const [userName,setUserName] = useState("Ritik Gaur")
    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className='app'>
           <Header/>
           {/* <Body/> */}
           {/* If path is '/' load Body
           If path is '/about' load About
           If path is '/contact' load Contact */}
           {/* This outlet will be filled with children according to path */}
           <Outlet/>
           {/* This outlet will be replacedwith below children */}
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Foodcart/>,
        children:[ 
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path:'/restaurants/:resid',
                element:<RestroMenu/>
            }
        ],
        errorElement:<Error/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxheading);
root.render(<RouterProvider router={appRouter}/>)