import { Input } from "../Input/index.tsx"
import { Cycles } from "../Cycles/index.tsx"
import { DefaultButton } from "../DefaultButton/index.tsx"
import { PlayCircleIcon, PlusCircle, PlusCircleIcon, PlusSquareIcon, StopCircleIcon } from "lucide-react"

export function MainForm() {
    return (

          <form className="form" action="">
                    <div className="formRow">
                       <Input
                        labelText='task'
                        id="meuId"
                        type="text"
                        placeholder="Digite Algo"/>
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
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