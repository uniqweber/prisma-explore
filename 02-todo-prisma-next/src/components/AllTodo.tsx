import React from "react";
import * as actions from "@/actions/index";
import {prisma} from "@/utils/db";

const AllTodo = async () => {
  const allTodos = await prisma.todo.findMany({
    select: {
      todo: true,
      id: true,
    },
  });
  return (
    <div>
      <h2 className="text-xl font-bold uppercase border-b pb-2 border-gray-200 mb-3">All Todos</h2>

      <div>
        {allTodos.map((todo, index) => (
          <form action="" key={todo.id} className="flex items-center w-full justify-between mb-2">
            <input hidden type="hidden" value={todo.id} name="todoId" />
            <div>
              <span className="text-gray-500 font-bold">{(++index).toString().padStart(2, "0")}. </span>
              <input type="text" defaultValue={todo.todo} name="todo" className="border-none outline-none" />
            </div>
            <div className="flex items-center gap-2">
              <button formAction={actions.updateTodo} className="h-7 text-sm border px-4 rounded border-gray-200 text-green-600">
                Save
              </button>
              <button formAction={actions.deleteTodo} className="h-7 text-sm border px-4 rounded border-gray-200 text-red-500">
                Delete
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default AllTodo;
