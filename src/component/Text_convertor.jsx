import React, { useState } from 'react'

const Text_convertor = () => {
    const handleUpClick = () => {
        let new_text = text.toUpperCase();
        setText(new_text)
    }

    const handleLowerClick = () => {
        let new_text = text.toLowerCase();
        setText(new_text)
    }

    const handleClearClick = () => {
        let new_text = '';
        setText(new_text)
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value).then(()=>{
            let val = document.getElementById('cpy')
            val.innerText = "copied";

            setTimeout(() => {
                val.innerText = "Copy Text";
            }, 3000);
        }).catch(() => {
            alert('Failed to copy text...')
        })

        document.getSelection().removeAllRanges()
    }

    const handleExtraSpaces = () => {
        setText(text.replace(/\s+/g ,' ').trim());
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const [text, setText] = useState('Enter text here');

    return (
        <div className='place-content-center h-screen grid'>
            <div className='text-5xl mb-5'>Text Analyzer</div>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnChange} id='myBox' className="w-3xl h-40 p-2 bg-blue-200 border-2 rounded-xl form-control"></textarea>
            </div>

            <div className='flex space-x-4 justify-center'>
                <div className='place-content-center grid'>
                    <button className='bg-blue-200 hover:bg-blue-400 p-2 rounded-xl cursor-pointer' onClick={handleUpClick}>Convert to Uppercase</button>
                </div>

                <div className='place-content-center grid'>
                    <button className='bg-blue-200 hover:bg-blue-400 p-2 rounded-xl cursor-pointer' onClick={handleLowerClick}>Convert to Lowercase</button>
                </div>

                <div className='place-content-center grid'>
                    <button className='bg-blue-200 hover:bg-blue-400 p-2 rounded-xl cursor-pointer' onClick={handleClearClick}>Clear Text</button>
                </div>

                <div className='place-content-center grid'>
                    <button className='bg-blue-200 hover:bg-blue-400 p-2 rounded-xl cursor-pointer w-23' onClick={handleCopy}><div id='cpy'>Copy Text</div></button>
                </div>

                <div className='place-content-center grid'>
                    <button className='bg-blue-200 hover:bg-blue-400 p-2 rounded-xl cursor-pointer' onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>
            </div>

            <div className='container my-8'>
                <div className='text-5xl mb-5'>Text Summary</div>
                <p>{text.split(/\s+/).filter((e)=>{return e.length !== 0}).length} words and {text.length} characters.</p>
            </div>
        </div>
    )
}

export default Text_convertor
