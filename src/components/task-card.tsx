/* ---------------------------------------------------- */
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tarea } from "@prisma/client"
import clsx from "clsx"
import { TaskButtonDelete } from "./task-button-delete"
import Link from "next/link"
/* ---------------------------------------------------- */

export function TaskCard({ tarea }: { tarea: Tarea }) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle>{tarea.nombre}</CardTitle>
        <Badge
          className={clsx({
            "bg-blue-500": tarea.prioridad == 'urgente',
            "bg-red-500": tarea.prioridad == 'alto',
            "bg-yellow-500": tarea.prioridad == 'medio',
            "bg-green-500": tarea.prioridad == 'baja',
          })}>{tarea.prioridad}</Badge>
      </CardHeader>
      <CardContent>
        <p>{tarea.descripcion}</p>
        <span className="text-slate-600">{new Date(tarea.fechaCreacion).toLocaleDateString()}</span>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end">
        <TaskButtonDelete tareaId={tarea.id} />
        <Link
          href={`/tareas/${tarea.id}}/editar`}
          className={buttonVariants({ variant: "secondary" })}
        >Editar
        </Link>
      </CardFooter>
    </Card>
  )
}
