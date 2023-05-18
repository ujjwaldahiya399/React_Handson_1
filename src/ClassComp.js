import React from "react";
import './ClassComp.css'
class ClassComp extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>This is created using class component</h1>
                <p className="txt">This is done using external css</p>
                <p style={{color:"blue"}}>This is done using inline css</p>
            </div>
        )
    }
}
export default ClassComp;