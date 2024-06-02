/* ---------------------------------------------------- */
import { eliminarTarea } from "@/actions/task-actions";
import { Button } from "./ui/button";
/* ---------------------------------------------------- */

export function TaskButtonDelete({ tareaId }: { tareaId: number }) {

  return (
    <form action={eliminarTarea}>
      <input type="hidden" name="tareaId" value={tareaId} />
      <Button variant="destructive">Delete</Button>
    </form>
  )
}

