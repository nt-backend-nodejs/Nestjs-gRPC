import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface TodoCreateRequest {
  title: string;
  description: string;
}

interface TodoCreateResponse {
  status: number;
  message: string;
}

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TodosGetResponse {
  todos: Todo[];
}

const todos = [];

@Controller()
export class SumController {
  @GrpcMethod('TodoService', 'CreateTodo')
  crreateTodo(data: TodoCreateRequest): TodoCreateResponse {
    console.log('Kelib tushgan data:', data);
    const id = todos.length + 1;
    const newTodo = { ...data, id, completed: false };
    console.log('Yangi todo:', newTodo);

    todos.push(newTodo);

    return { message: 'yaratildi!.', status: 201 };
  }

  @GrpcMethod('TodoService', 'GetTodos')
  getTodos(): TodosGetResponse {
    return { todos };
  }
}
