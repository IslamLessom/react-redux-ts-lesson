export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODOS_PAGE = "SET_TODOS_PAGE",
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODOS;
}

interface FetchTodoSuccessAction {
  payload: any[];
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
}

interface FetchTodoErrorAction {
  payload: string | null;
  type: TodoActionTypes.FETCH_TODOS_ERROR;
}

interface FetchTodoPageAction {
  payload: number;
  type: TodoActionTypes.SET_TODOS_PAGE;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoErrorAction
  | FetchTodoPageAction
  | FetchTodoSuccessAction;
