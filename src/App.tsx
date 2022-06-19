import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './component/InputField';
import Display from './component/Display';
function App() {
  const [name, setName] = useState<string>('')
  const [foodList, setFoodList] = useState<string[]>([]);
  const [foodListGreen, setFoodListGreen] = useState<string[]>([]);
  const [checked, setChecked] = useState(false); 

  function handleChange(e:any) {
    setName(e.target.value);
    
  }
let a=foodList;
  const handleClick = () => {
    //alert(name);
    //setFoodList([...foodList, { name: name}]);
    //setFoodList(prevNames => [...prevNames, name]);
    {checked ? setFoodList(prevNames => [...prevNames, name]): setFoodListGreen(prevNames => [...prevNames, name])}
    // {checked ? a=foodList: a=foodListGreen}
  }

  const isChecked = (e:any) => {
    // const checked = e.target.checked;
    // if (checked) {
    //  alert("Y");
    // } else {
    //   alert("N");
    // }
    setChecked(!checked); 
  };

  return (
    <div>
      <InputField handelInput={handleChange} name={name} handelBtn={handleClick} handelChkbox={isChecked}   />
      {/* {JSON.stringify(name)} */}
       {/* <input type="text" onChange={ handleChange } value={name}  /> */}
     {/* <button onClick={handleClick}>Add text</button> 
      <input type="checkbox" onClick={(e) => {
                                isChecked(e);
                            }} />   */}
      <div style={{display:"table", width:"100%"}}>

      {/* <div style={{float:"left", width:"50%"}}>
      {a.map((element, index) => {
  return (
    <div key={index} style={{border:"solid 1px red"}}>
      <h2>{element}</h2>
    </div>
  );
})}
</div> */}
<div style={{border:"solid 1px green"}}>
<Display list={foodListGreen} />
</div>
<div style={{border:"solid 1px red"}}>
<Display list={foodList} />
</div>
{/* <div style={{float:"left", width:"50%"}}>
{foodListGreen.map((element, index) => {
  return (
    <div key={index} style={{border:"solid 1px green"}}>
      <h2>{element}</h2>
    </div>
  );
})}
</div> */}
    </div>
    </div>


  );
}

export default App;
