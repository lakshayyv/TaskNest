import { RecoilRoot } from "recoil";
import TodoContainer from "./components/todos/container";
import TodoForm from "./components/form/form";

export default function App() {
  return (
    <RecoilRoot>
      <div className="grid grid-cols-2 w-full h-full dark:bg-dark dark:text-white pt-[5rem]">
        <TodoForm />
        <TodoContainer />
      </div>
    </RecoilRoot>
  );
}
