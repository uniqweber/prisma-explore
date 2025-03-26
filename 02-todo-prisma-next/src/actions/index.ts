"use server";
import {prisma} from "@/utils/db";
import {revalidatePath} from "next/cache";

// Todo Delete Function
export const deleteTodo = async (formData: FormData) => {
  try {
    const id = formData.get("todoId") as string;
    await prisma.todo.delete({where: {id}});
    revalidatePath("/");
  } catch (error) {
    console.error("Failed to delete todo:", error);
  }
};

// Todo Update Function
export const updateTodo = async (formData: FormData) => {
  try {
    const id = formData.get("todoId") as string;
    const todo = formData.get("todo") as string;
    await prisma.todo.update({
      where: {id},
      data: {todo},
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Failed to update todo:", error);
  }
};
