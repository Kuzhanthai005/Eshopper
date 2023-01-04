import React,{useState, useRef} from 'react'

const UseRefHookExample = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null)

    const inputRefVal = useRef(0)

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(inputRefVal.current);   

        inputRefVal.current = setInterval(() => {
            setNow(Date.now());
        },10)


    }
    const handleStop = () => {
         clearInterval(inputRefVal.current);    
    }

    let startstoptime = 0;

    if(startTime != null && now != null){
        startstoptime = (now - startTime) / 1000;
    }
  return (
    <div>
        <p>Time {startstoptime}</p>
        <button onClick={handleStart}>
            Start
        </button>
        <button onClick={handleStop}>
            Stop
        </button>
    </div>
  )
}

export default UseRefHookExample