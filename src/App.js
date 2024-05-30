import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
// import { useState, useEffect } from 'react';

function App() {

//   const [theme, setTheme] = useState(null);

//   useEffect(
//     () => {
//       if ( window.matchMedia('(prefers-color-scheme:dark)').matches ){
//         setTheme('dark');
//       } else {
//         setTheme('light');
//     }
//   },[])

//   useEffect( () => {
//     if(theme === "dark"){
//     document.documentElement.classList.add("dark");
//   }else {
//     document.documentElement.classList.remove("dark");
//   }
// }, [theme] );

// const handleThemeSwitch = () => {
//   setTheme(theme === "dark" ? "light" : "dark");
// }

return (
  <div className='  '>
  {/* <div className=' bg-white dark:bg-black '> */}
    {/* <button onClick={handleThemeSwitch} >Dark</button> */}
    <RouterProvider router={router} ></RouterProvider>
  </div>
);
}

export default App;
