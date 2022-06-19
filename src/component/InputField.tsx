import React from 'react'

interface formProps {
  handelInput: (e:any)=>void;
  name: string;
  handelBtn:()=>void;
  handelChkbox:(e:any)=>void;
}
const InputField = ({handelInput, name, handelBtn, handelChkbox}: formProps) => {

  
  return (
    <div>
      <input type="text" onChange={handelInput} value={name} />
       <button  onClick={handelBtn}>Add text</button> 
       <input type="checkbox" onClick={(e) => {
                                handelChkbox(e);
                            }} />  
    </div>
  )
}

export default InputField
