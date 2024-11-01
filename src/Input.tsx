import { FaDeleteLeft

 } from "react-icons/fa6"
type Props = {
  tagging: string
  minutes: number
  onHandleLabel: (e:any, index: number) => void
  onHandleMinutes: (e: any, index: number) => void
  index: number
}
const Input = ({tagging,minutes, onHandleLabel, onHandleMinutes,index}: Props) => {

  return (
    <div className="flex flex-row w-full border-gray-300">
    <input type="text" className="w-4/6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tagging"  value={tagging} onChange={(e) => onHandleLabel(e, index)} />
    <input type="number" className="w-2/6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Minutes" value={minutes} onChange={(e) => onHandleMinutes(e, index)}/>
    <button className="text-purple-500 rounded-lg hover:text-red-700 transition border-b-purple-900 ml-1">
      <FaDeleteLeft className="text-3xl" />
    </button>
  </div>
  )
}
export default Input