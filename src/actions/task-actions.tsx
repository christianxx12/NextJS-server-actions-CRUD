"use server"

/* ---------------------------------------------------- */
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
/* ---------------------------------------------------- */

export async function crearTarea(formData: FormData) {
  const nombre = formData.get("nombre")?.toString()
  const descripcion = formData.get("descripcion")?.toString()
  const prioridad = formData.get("prioridad")?.toString()

  console.log({ nombre, descripcion, prioridad })

  if (!nombre || !descripcion || !prioridad) return

  const nuevaTarea = await prisma.tarea.create({
    data: {
      nombre: nombre,
      descripcion: descripcion,
      prioridad: prioridad,
    }
  })

  console.log(nuevaTarea)
  redirect('/')
}

export async function eliminarTarea(formData: FormData) {
  "use server"
  const tareaId = formData.get("tareaId")?.toString()

  if (!tareaId) return

  await prisma.tarea.delete({
    where: {
      id: parseInt(tareaId)
    }
  })

  revalidatePath('/')
}

export async function actualizarTarea(formData: FormData) {
  const id = formData.get("id")?.toString()
  const nombre = formData.get("nombre")?.toString()
  const descripcion = formData.get("descripcion")?.toString()
  const prioridad = formData.get("prioridad")?.toString()

  if (!id || !nombre || !descripcion || !prioridad) return

  await prisma.tarea.update({
    where: {
      id: parseInt(id)
    },
    data: {
      nombre: nombre,
      descripcion: descripcion,
      prioridad: prioridad,
    }
  })

  redirect("/")
}