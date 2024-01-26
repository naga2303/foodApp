import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement('h1',{id:"heading"}, "Hello World from React")

//Nested Heading
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am h1 of child1"),
        React.createElement("h2",{},"I am h2 of child1")
    ]),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am h1 of child1"),
        React.createElement("h2",{},"I am h2 of child1")
    ])
])



//Below using JSX Element
const jsxHeading = <h1 id="Heading">Heading of JSX</h1>

//Belowusing JSX Functional component
const HeadingFunction = () =>(
    <div id="heading">
        
        <h1>Heading using Function component</h1>
    </div>
)
//root1.render(<HeadingFunction></HeadingFunction>)

/** Passing attributes to JSX */
const HeadingAttributes = () =>(
    <div className="Attributes">
        <h1 id="head1">head1 with attributes</h1>
        <h1 className="class1">head2 with attributes</h1>
    </div>
)

/**root1.render(<HeadingAttributes></HeadingAttributes>) */

//Composition of component - Add component inside another component

const Title =()=>{
    return(
<h1 className="ic">InnerComponent</h1>
)}

const ComponentComposition = () => {
    return(
    <div className="cc">
        <Title></Title>
        <h1>Outer component</h1>
    </div>
)
    }
const root1 = ReactDOM.createRoot(document.getElementById("root1"))

/**Code - Create a Header Component from scratch using Functional Component with JSX */

const HeaderCssComponent = () =>{
    return (
        <div className="header">
            
                <img  src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" className="logo" height={50} width={50}/>
                <input className="textbox" type="text"></input>
                <img className="user" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" height={50} width={50}/>

            
        </div>
    )
}

root1.render(<HeaderCssComponent></HeaderCssComponent>)
    