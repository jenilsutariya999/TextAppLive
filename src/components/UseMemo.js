import React, {useState , useMemo}from 'react'

export default function UseMemo() {
    const [count , setCount] = useState (10)
    const [change, setChange]= useState(false)

    const cal = () => {
        console.log('calculate...')
        return count * 2
    }

    useMemo(()=>{
        console.log('Change--->',change)
      },[change]) 

    const value = useMemo(cal , [count])

    const Test=()=>{
        setChange(!change)
    }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Dependent Count</button>

      <p>count : {count}</p>
      <p>Memoized count : {value}</p>
      <button onClick={Test}>Test</button>

    </div>
  )
}
