// import { useState } from 'react'
// import './App.css'



// const App = () => {

//   const [color,setColor]=useState()
//   const onClick = async (color)=>{
//     let [tab]=await chrome.tabs.query({active:true})
//     chrome.scripting.executeScript({
//       target:{tabId:tab.id!},
//       func:()=>{
//         document.body.style.backgroundColor=color;
//       }
//     })
//   }
//   return (
//     <div>
//       <div className="container">
//         <div className="top">
//         <h1>Hii This is Gaurav.</h1>
//         </div>
//         <div className="btn">
//           <button onClick={onClick}>Click me</button>
//         </div>
        
//       </div>
      
//     </div>
//   )
// }

// export default App


import { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#ffffff'); // Default color is white

  const onClick = async () => {
    // Query the active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // Inject a script to change the background color
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: (selectedColor) => {
        document.body.style.backgroundColor = selectedColor;
      },
      args: [color], // Pass the selected color as an argument
    });
  };

  return (
    <div>
      <div className="container">
        <div className="top">
          <h1>Hi, This is Gaurav.</h1>
        </div>
        <div className="picker">
          {/* Color Picker */}
          <label htmlFor="colorPicker">Pick a color: </label>
          <input
            type="color"
            id="colorPicker"
            value={color}
            onChange={(e) => setColor(e.target.value)} // Update color state
          />
        </div>
        <div className="btn">
          <button onClick={onClick}>Apply Color</button>
        </div>
      </div>
    </div>
  );
};

export default App;
