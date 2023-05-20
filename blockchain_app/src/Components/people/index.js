import React from "react";
import { Title } from "../title";
import { BsFillPeopleFill as Icon} from "react-icons/bs";
import Table from "./table";

function People() {
    const data = [
        { id: 1, name: 'John Doe', title: "CEO", department: "Engineering", email: 'john@example.com' },
        { id: 2, name: 'John Doe', title: "CEO", department: "Engineering", email: 'john@example.com' },
        { id: 3, name: 'John Doe', title: "CEO", department: "Engineering", email: 'john@example.com' },
      ];
    return(
        <section>
            <Title title={"People"} icon={Icon}/>
            <div className="container">
        <Table datas={data}/>
        </div>
    </section>
    );
}

export default People;