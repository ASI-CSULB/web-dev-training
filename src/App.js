import { useState } from 'react';
import './App.css';

const Data=[
  {
    name:"demo1",
    email:"demo1@gmail.com",
    img:"https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg"
  },
  {
    name:"demo2",
    email:"demo2@gmail.com",
    img:"https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg"
  },
  {
    name:"demo3",
    email:"demo3@gmail.com",
    img:"https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg"
  },
  {
    name:"demo4",
    email:"demo4@gmail.com",
    img:"https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg"
  }
]

function App() {

    const [mainData, Set_mainData]=useState(Data)

  return (
    <div className="App">
           <div>Code Here</div>
    </div>
  );
}

export default App;
