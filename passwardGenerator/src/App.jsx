import { useState, useCallback, useEffect, useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8) //value in the useState is always the default value
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("") // it is empty because we will fetch the data from the UI


  // change the copy button text when click
  let intialValue = "Copy Now";
  const [buttonText, setbuttontext] = useState(intialValue) 

  setTimeout( ()=>{
    setbuttontext(intialValue)
  },1000);

  // display the copy conformtion when copy butto clicked 
  let intialTextValue = "text is not copied";
  const [displayCopyText, setdisplayCopyText] = useState(null) 
  
  setTimeout( ()=>{
    setdisplayCopyText(null)
  },5000);

  // useref hook
  const passwordRef = useRef(null)

  // password generator fuction with the useCallback() 
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (numberAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*()_+{}|:"


    for (let i = 1; i <= length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)

  }

  setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
   
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,100);
      window.navigator.clipboard.writeText(password)
    
      setbuttontext("Copied")
      setdisplayCopyText("text is Copied")
      //  adding the alert message when click using the useRef
      // alert("Password Copied") 
  },[password])

useEffect(() => {passwordGenerator()},[length, numberAllowed, charAllowed, passwordGenerator])
  


  return (
    <>
      <div className="w-full max-w-full shadow-md rounded-lg py-4 my-8 mx-4 text-orange-700 bg-gray-800 content-center">
        <h1 className="text-center">Generate Unique Passwords</h1>

        <h3 id='textField'>{displayCopyText}</h3>
       
        <div className="flex shadow mb-4 overflow-hidden  ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}  className="bg-white outline-none shrink-0">{buttonText}</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              // type="range"
              // min={8}
              // max={100}
              // value={length}
              // className='cursor-pointer'
              // onChange={(e) => {setLength(e.length.value)}}
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
          <input
              
              type="checkbox"
              defaultChecked={numberAllowed}
              id='number'
              
              onChange={() => {
                setNumberAllowed((prev)=> !prev);
              }}
            /><label htmlFor="">Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
          <input
              
              type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setNumberAllowed((prev)=> !prev);
              }}
            /><label htmlFor="">Special Character</label>
          </div>
        </div>
      </div>
    </>
  );
}



export default App
