import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaksStateModel";
import { InitialTaskState } from "./InitialTaskState";

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: InitialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue)