import React from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';
// function App() {
//   return (
//     <div className="App">
//       <h1>Styling using Functional and Class Component</h1>
//       <div className='btnsDiv'>
//         <button className='btn1'>To see styling in functional Component</button>
//         <button className='btn2'>To see styling in class Component</button>
//       </div>
//       <div className='components'>
//         <FuncComp />
//         <ClassComp />
//       </div>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btn1Click:false,
      btn2Click:false
    }
  }
   btn1ClickHandler = () => {
    this.setState({
      btn1Click:!this.state.btn1Click
    })
    // console.log("hii")
  }
  btn2ClickHandler = () => {
    this.setState({
      btn2Click:!this.state.btn2Click
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Styling using Functional and Class Component</h1>
        <div className='btnsDiv'>
          <button onClick={this.btn1ClickHandler} className='btn1'>To see styling in functional Component</button>
          <button onClick={this.btn2ClickHandler} className='btn2'>To see styling in class Component</button>
        </div>
        <div className='components'>
        {this.state.btn1Click ? <FuncComp /> : <div></div>}
          {/* <FuncComp /> */}
        {this.state.btn2Click ? <ClassComp /> : <div></div>}
          {/* <ClassComp /> */}
        </div>
    </div>
    )
  }
}

export default App;
