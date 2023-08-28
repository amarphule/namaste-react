import React from "react";
import ReactDOM from 'react-dom/client'

//React create element without babel
const heading = React.createElement('h1',{}, "Namaste React")



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)
