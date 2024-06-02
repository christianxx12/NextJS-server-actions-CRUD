import { Taskform } from "@/app/new/task-form"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

async function TaskPageEdit({ params }: {
  params: {
    id: string
  }
}) {

  const tarea = await prisma.tarea.findFirst({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!tarea) redirect("/")

  return (
    <div className="flex justify-center items-center h-screen">
      <Taskform tarea={tarea} />
    </div>
  )
}

export default TaskPageEdit
