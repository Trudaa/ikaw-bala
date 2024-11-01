
type Props = {}
import Input from "./Input"
import  { useEffect, useState } from 'react'

//type TaggingList = 'Break' | 'Lunch' | 'Meeting' | 'Coaching' | 'Wellness'
type TaggingList = {
  label: string
  minutes: number
}

const App = (props: Props) => {
  const [tagging, setTagging] = useState<string[]>(['Break', 'Lunch', 'Meeting', 'Coaching', 'Wellness']);
  const [endshift, setEndshift] = useState<string>('10:00')

  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const onHandleLabel = (e: any, index: number) => {
    setTagging(prevArray => {
      const newArray = [...prevArray];
      newArray[index] = e.target.value;
      return newArray;
    });
  }

  const onHandleMinutes = () => {
    
  }
  const onHandleAdd = () => {
    setTagging(prevArray => [...prevArray, '']);
  }
  return (
    <>
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="bg-white p-4 w-full max-w-lg border-solid rounded-lg gap-4 flex flex-col">
        <div className="flex flex-col">
          <p className="bg-violet-600 text-white text-center text-3xl font-bold rounded-lg">Indirect Scheduler</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-left text-lg rounded-lg">End shift</p>
          <input 
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full" 
            type="time" 
            name="endshift" 
            id="endshift"  
            value={endshift}
            onChange={(e) => setEndshift(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 text-lg">
          <p>Current Time: <strong>{currentTime.toLocaleTimeString(navigator.language, {hour: "2-digit", minute: "2-digit",})}</strong></p>
          <p>Remaining Time: <strong>{new Date().toLocaleTimeString()}</strong></p>
        </div>
        <div className="flex flex-col gap-3 text-lg">
          {tagging.map((tag, index) => (
            <Input minutes={0} tagging={tag} onHandleLabel={onHandleLabel} onHandleMinutes={onHandleMinutes} key={index} index={index}/>
          ))}
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={onHandleAdd}>Add Indirect</button>
          </div>
          <div>
            <strong className="text-xl">Total Indirect: 1 Hour and 30 Minutes</strong>
            <div className="bg-violet-100 rounded-lg p-4 shadow-md gap-2 flex flex-col">
              <div className="flex flex-row justify-between"> 
                <p>Schedule</p>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
              </div>
              <div className="bg-violet-200 rounded-lg p-4 shadow-md">
                <p><strong>Indirect 1:</strong> 10:00 PM - 9:30 PM (60 mins)</p>
                <p><strong>Indirect 1:</strong> 10:00 PM - 9:30 PM (60 mins)</p>
                <p><strong>Indirect 1:</strong> 10:00 PM - 9:30 PM (60 mins)</p>
                <p><strong>Indirect 1:</strong> 10:00 PM - 9:30 PM (60 mins)</p>
                <p><strong>Indirect 1:</strong> 10:00 PM - 9:30 PM (60 mins)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      
      <footer className='text-white text-center py-2 mt-3 bg-purple-800'>
          <p>Created by: <a href="https://github.com/Trudaa" className="text-white hover:text-gray-300">Truda 🤪</a></p>
          <p>Copyright 2024. All rights reserved.</p>
        </footer>
    </>
  )
}
export default App
