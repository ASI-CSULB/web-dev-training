import { useState } from "react";
import "./App.css";
const Data = [
  {
    name: "demo1",
    email: "demo1@gmail.com",
    img: "F24_BPE_Back-to-the-Beach-Week_dgtl-CalButton.jpg",
  },
  {
    name: "demo2",
    email: "demo2@gmail.com",
    img: "F24_BPE_Movies-on-the-House-Inside-Out-2_calbutton.jpg",
  },
  {
    name: "demo3",
    email: "demo3@gmail.com",
    img: "F24_BPE_Noontime-Triptides_dgtl-CalButton_dgtl-CalButton.jpg",
  },
  {
    name: "demo4",
    email: "demo4@gmail.com",
    img: "F24_USU_Farmers-Market_dgtl-CalButton.jpg",
  },
];

function App() {
  const [mainData, Set_mainData] = useState(Data);

  return (
    <div className="App">
      <div>Code Here</div>
      
    </div>
  );
}

export default App;
