import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>Hello world!</h1>
    </div>
  )
}
const myAnotherEle=(
<a href='http://www.google.com' target='_blank' id="idk"> Hello mfs! </a>
)
const username="Ashri";
const anotherReactEle= React.createElement(
  "a",{href:"http://www.google.com", target:"_blank"},"click me ",username
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Myapp/> */}
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//     myAnotherEle
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//     anotherReactEle
// )
