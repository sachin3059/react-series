import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str+= "!@#$%_*&"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  }, [password])


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
 

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-50 py-8 my-8 text-orange-500 text-center bg-grey'>
        Password Generator
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            value={password}
            className='outline-none w-full py-1 px-20'
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
            <button
            className='outline-none bg-blue-700 text-white'
            onClick={copyPasswordToClipboard}
            >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'> 
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'

            onChange={(e) => {setLength(e.target.value)}}
            />
            <label> Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
                type="checkbox" 
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={(e) => {setNumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
                type="checkbox" 
                defaultChecked={characterAllowed}
                id="characterInput"
                onChange={(e) => {setcharacterAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

       
      </div>

    </>
  )
}

export default App
