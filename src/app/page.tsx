/* ---------------------------------------------------- */
import { TaskCard } from "@/components/task-card"
import prisma from "@/lib/prisma"
/* ---------------------------------------------------- */

async function HomePage() {

  const tareas = await prisma.tarea.findMany()
  console.log(tareas)

  return (
    <div className="grid grid-cols-3 gap-4">
      {tareas.map(tarea => (
        <TaskCard tarea={tarea} key={tarea.id} />
      ))}
    </div>
  )
}

export default HomePage