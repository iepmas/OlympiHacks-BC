import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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

    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }
    
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
            {popupOpen &&
            <Button 
                style={{margin:"10px"}}
                onClick={handlePopupClick}> Add Employee
            </Button>
            }
            <Button 
                style={{margin:"10px"}}
                onClick={handlePopupClick}> {popupOpen ? "Close" : "Add Employee"}
            </Button>
            {popupOpen && 
            <div style={{width: "500px", margin:"0px auto"}}>
                {Object.keys(data[0]).map(text => 
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" style={{width:"125px", textAlign:"right"}}>
                        {titleCase(text)}
                        </InputGroup.Text>
                        <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                )}
            </div>}
            {loaded ? 
            <div className="container">
                {!popupOpen && <Table datas={data}/>}
            </div> : <p>Loading...</p>}
        </section>
    );
}

export default People;