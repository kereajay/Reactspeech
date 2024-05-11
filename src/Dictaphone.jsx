import 'regenerator-runtime/runtime';
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { toast } from 'react-toastify';

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    const handlecopy = () => {
        if (!transcript) {
            toast.warning("please say  something to copy text", {
                position: "top-center",
                autoClose: 1500
            })
            return
        }
        navigator.clipboard.writeText(transcript);
        // transcript("copied")
        resetTranscript("");
        toast.success("your text is copied successfully", {
            position: "top-center",
            autoClose: 1500
        })

    }

    return (
        <div>
            <p className='text-2xl text-center'>
                Microphone:
                <span className={`text-${listening ? 'green' : 'red'}-500`}>{listening ? 'on' : 'off'}
                </span>
            </p>
            <br />
            <div className='shadow-[0_20px_50px_rgba(255,_191,_116,_1.0)] w-[50%] m-auto p-5 '>
                <div className=' p-10  '>
                    <p>{transcript}</p>
                </div>
                <div className='flex flex-row justify-between mt-[30%]' >
                    <button onClick={SpeechRecognition.startListening} className='text-2xl bg-orange-400 p-2 w-[25%] text-white rounded-lg'>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening} className='text-2xl bg-orange-400 p-2 w-[25%] text-white rounded-lg'>Stop Listening</button>
                    {/* <button onClick={resetTranscript} className='text-2xl bg-orange-400 p-2 w-[25%] text-white rounded-lg'>Reset</button> */}
                    <button onClick={handlecopy} className='text-2xl bg-orange-400 p-2 w-[25%] text-white rounded-lg'>Copy</button>
                </div>
            </div>
        </div>
    );
};
export default Dictaphone;