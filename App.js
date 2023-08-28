import React from "react";
import ReactDOM from 'react-dom/client'


// React element
const description = <h3>We will be practicing React using parcel.</h3>

// Reat Componet
function Title(){
    return <h1>Namaste React</h1>
}

// Root React component
const App = ()=>{
    return(
        <div>
            <Title/>
            {description}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)
