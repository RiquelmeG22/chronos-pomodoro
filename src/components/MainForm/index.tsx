import { Input } from "../Input/index.tsx"
import { Cycles } from "../Cycles/index.tsx"
import { DefaultButton } from "../DefaultButton/index.tsx"
import { PlayCircleIcon, PlusCircle, PlusCircleIcon, PlusSquareIcon, StopCircleIcon } from "lucide-react"
import { useRef } from "react";


export function MainForm() {

    const taskNameInput = useRef<HTMLInputElement>(null)

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('deu certo')
    }

    return (

        <form onSubmit={handleCreateNewTask} className="form" action="">
            <div className="formRow">
                <Input
                    labelText='task'
                    id="meuId"
                    type="text"
                    placeholder="Digite Algo" 
                    ref={taskNameInput}
                    />
            </div>

            <div className="formRow">
                <p>Lo teste ay progamention 25m</p>
            </div>

            <div className="formRow">
                <Cycles />
            </div>

            <div className="formRow">
                < DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>

    )
}