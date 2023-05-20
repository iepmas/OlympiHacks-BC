import React from "react";
import { Title } from "../title";
import { AiFillHome as Icon} from "react-icons/ai";
import ToDoList from "./ToDoList";

function Home() {
    return(
        <div>
            <Title title={"Home"} icon={Icon}/>
            <div className="container">
                <ToDoList/>
            </div>
        </div>
    );
}

export default Home;