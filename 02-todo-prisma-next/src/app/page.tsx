import React from "react";
import {prisma} from "@/utils/db";
import AllTodo from "@/components/AllTodo";
import {revalidatePath} from "next/cache";

const Home = () => {
  const createTodo = async (formData: FormData) => {
    "use server";
    const todo = formData.get("todo") as string;
    await prisma.todo.create({data: {todo}});
    revalidatePath("/");
  };

  return (
    <div className="h-screen  pt-16  gap-10">
      <div className="max-w-lg w-full mx-auto space-y-10">
        <form action={createTodo} className="flex items-center gap-2">
          <input
            required
            type="text"
            name="todo"
            className="h-10 border w-full rounded-md border-gray-200 px-3 text-sm"
            placeholder="Add a new todo..."
          />
          <button type="submit" className="bg-gray-800  text-white text-sm h-10 px-10 rounded-md">
            Add
          </button>
        </form>
        <AllTodo />
      </div>
    </div>
  );
};

export default Home;
