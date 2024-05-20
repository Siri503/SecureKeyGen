import React,{ useState } from 'react';
import './App.css';
import {upperCaseLetters,lowerCaseLetters,numbers,special} from "./data";
import Modal from "./Modal"
function App() {
  const [password, setPassword]=useState("");
  const [counter,setCounter]=useState(6);
  const [isUppercase,setIsUppercase]=useState(false);
  const [isLowercase,setIsLowercase]=useState(false);
  const [isNumber,setIsNumber]=useState(false);
  const [isSymbol,setIsSymbol]=useState(false);
  const [modal,setModal]=useState({
    title:"",
    show:false,
    message:" ",
  })
  const increaseCounter=(e)=>{
    e.preventDefault();
    if(counter<20){
      setCounter((prevCounter)=>prevCounter+1);
    }
  };
  const decreaseCounter=(e)=>{
    e.preventDefault();
    if(counter<20){
      setCounter((prevCounter)=>prevCounter-1);
    }
  };
  const generatePassword=(e)=>{
    e.preventDefault();
    let _password="";
    for(let i=0;i<counter;i++){
      _password+=getRandom();
      }
      setPassword(_password);
  }
  const getRandom=()=>{
    const chars=[];
    if(!isUppercase && !isLowercase && ! isNumber && !isSymbol){
      return " ";
    }
    if(isUppercase){
      chars.push(upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)])
    }
    if(isLowercase){
      chars.push(lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)])
    }
    if(isNumber){
      chars.push(numbers[Math.floor(Math.random()*numbers.length)])
    }
    if(isSymbol){
      chars.push(special[Math.floor(Math.random()*special.length)])
    }
    if (chars.length===0) return;
    return chars[Math.floor(Math.random()*chars.length)];
  };
  const createCopy=()=>{
    const textAreaE1=document.createElement("textarea");
    textAreaE1.innerText=password;
    document.body.appendChild(textAreaE1);
    textAreaE1.select();
    document.execCommand("copy");
    textAreaE1.remove();
  }
  const copyPasswordHandle=(e)=>{
    e.preventDefault();
    if(password.trim().length===0){
      setModal({
        title:"Error",
        message:"There is nothing to copy",
        show:true,
      })
    }
    else{
      setModal({
        title:"Success",
        message:"Password successfully copied to clipboard",
        show:true,
      });
    }
    createCopy();
  }
  const closeModalHandler=()=>{
    setModal({...modal,show:false})
  }
  return (
    <div className='App'>
      {modal.show && <Modal onClose={closeModalHandler} title={modal.title} message={modal.message}/>}
      <div className='generator'>
        <h2 className='generator__title'>SecureKeyGen</h2>
        <h4 className='password'>{password}</h4>
      <form className='generator__form'>
        <div className='generator__form-controls'>
          <div className='generator__form-control'>
            <label htmlFor='uppercase'>Uppercase</label>
            <input type="checkbox" id="uppercase" name="uppercase"
            checked={isUppercase} onChange={(e)=>setIsUppercase(e.target.checked)}/>
          </div>
          <div className='generator__form-control'>
            <label htmlFor='lowercase'>Lowercase</label>
            <input type="checkbox" id="lowercase" name="lowercase"
             checked={isLowercase} onChange={(e)=>setIsLowercase(e.target.checked)}/>
          </div>
          <div className='generator__form-control'>
            <label htmlFor='numbers'>Numbers</label>

            <input type="checkbox" id="numbers" name="numbers"
             checked={isNumber} onChange={(e)=>setIsNumber(e.target.checked)}
            />
          </div>
          <div className='generator__form-control'>
            <label htmlFor='symbols'>Symbols</label>
            <input type="checkbox" id="symbols" name="symbols"
             checked={isSymbol} onChange={(e)=>setIsSymbol(e.target.checked)}/>
          </div>
          <div className='generator__length'>
            <h4 className='generator__length-title'>Password Length</h4>
            <div className='generator__length-counter'>
              <button onClick={decreaseCounter}>-</button>
              <span>{counter}</span>
              <button onClick={increaseCounter}>+</button>
            </div>
          </div>
          <div className='generator_form-actions'>
            <button onClick={generatePassword} className='btn generate-btn'>Generate Password</button>
            <button onClick={copyPasswordHandle} className='btn copy-btn'>Copy Password</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;




















































































































