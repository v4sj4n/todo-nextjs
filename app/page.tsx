import Todo from "./components/Todo";
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient()

export interface TodoCardType{
  id: number;
  title: string;
  description: string | null;
  completed: boolean;
}


const fetchAllTodos = async () : Promise<TodoCardType[]> => {
  const todos = await client.todo.findMany({
        select:{
            id: true,
            title: true,
            description: true,
            completed: true,
        }
    }
    )
    return todos
}

export default async function Home() {
  const todos = await fetchAllTodos()
    console.log(todos)
  return (
    <main className="mt-10 flex flex-col items-center">
    <h1 className=" font-extrabold text-7xl pb-8">Todo App</h1>
    <div className="bg-slate-200 p-4 grid grid-cols-3 gap-4">
      {todos && todos.map(todo => (
        <Todo todo={todo} key={"1"}  />
      ))}
      
    </div>
    </main>
    
  )
}