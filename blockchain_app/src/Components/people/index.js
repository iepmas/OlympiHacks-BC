import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Title } from "../title";
import { BsFillPeopleFill as Icon} from "react-icons/bs";
import Table from "./table";
import "./people.css"


function People() {
    const [popupOpen, setPopupOpen] = useState(false)
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        loadTable()
    }, [])
    
    const handlePopupClick = () => {
        setPopupOpen(!popupOpen)
    }

    const loadTable = () => {
        setData([
            { id: 1, name: 'John Doe', title: "CEO", department: "Engineering", email: 'john@example.com' },
            { id: 2, name: 'John Doe', title: "CEO", department: "Engineering", email: 'john@example.com' },
            { id: 3, name: 'John Doe', title: "CEO", department: "Engineering", email: 'john@example.com' },
          ])
        setLoaded(true)
    }
    return(
        <section>
            <Title title={"People"} icon={Icon}/>
            <Button 
            style={{margin:"10px"}}
            onClick={handlePopupClick}> {popupOpen ? "Close" : "Add Employee"}</Button>
            {popupOpen && 
            <div>
                Data
            </div>
            }
            {loaded ? 
            <div className="container">
                <Table datas={data}/>
            </div> : <p>Loading...</p>}
        </section>
    );
}

export default People;