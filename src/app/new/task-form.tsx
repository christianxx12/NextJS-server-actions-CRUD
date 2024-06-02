/* ---------------------------------------------------- */
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { actualizarTarea, crearTarea } from "@/actions/task-actions"
import { Tarea } from "@prisma/client"
import Link from "next/link"

/* ---------------------------------------------------- */

export function Taskform({ tarea }: { tarea: Tarea }) {

  // Si el id de la tarea existe ejecuta la funcion actualizar, sino ejecuta el crear
  const functionAction = tarea?.id ? actualizarTarea : crearTarea

  return (
    <form action={functionAction}>
      <input type="hidden" name="id" value={tarea?.id} />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Crear Tarea</CardTitle>
          <CardDescription>Rellene el formulario para crear una nueva tarea</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                name="nombre"
                id="nombre"
                placeholder="Nombre de tu tarea"
                defaultValue={tarea?.nombre}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="descripcion">Descripcion</Label>
              <Textarea
                name="descripcion"
                id="descripcion"
                placeholder="Describe tu tarea"
                defaultValue={tarea?.descripcion || ""}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="prioridad">Prioridad</Label>
              <Select name="prioridad" defaultValue={tarea?.prioridad}>
                <SelectTrigger id="prioridad">
                  <SelectValue placeholder="Selecciona la prioridad" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="baja">Baja</SelectItem>
                  <SelectItem value="medio">Medio</SelectItem>
                  <SelectItem value="alto">Alto</SelectItem>
                  <SelectItem value="urgente">Urgente</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className={buttonVariants({ variant: "secondary" })}>Cancel</Link>
          <Button type="submit">
            {tarea?.id ? "Actualizar Tarea" : "Crear Tarea"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
