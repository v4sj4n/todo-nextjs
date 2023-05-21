import { TodoCardType } from "../page"
interface Props{
    todo: TodoCardType
}
export default  function Todo({todo}: Props) {
    
  return (
    <div className=" flex flex-col items-center  h-32 bg-slate-500 p-4 ">
        <h1 className="font-medium capitalize text-4xl text-neutral-100">{todo.title}</h1>
        <p className="font-regular text-yellow-200 mb-2">{todo.description}</p>
        <input type="checkbox" />
        
    </div>
  )
}