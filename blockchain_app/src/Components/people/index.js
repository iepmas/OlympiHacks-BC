import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Title } from "../title";
import { BsFillPeopleFill as Icon} from "react-icons/bs";
import Table from "./table";
import "./people.css"

import { 
    // FileIo,
    // FileDownloadHandler,
    // FileUploadHandler, 
} from "jackal.js"


function People() {
    const [popupOpen, setPopupOpen] = useState(false)
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        loadTable()

        // const d = FileDownloadHandler()
        // const down = d.trackFile()

        // console.log(d.receiveBacon())

    }, [])

    const doStuff = () => {
        // const f = FileIo()
        // console.log(f.verifyFoldersExist("home"))
    }

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

    const handleAddEmployee = () => {
        //text encoder 
        //turn it into a array buffer
        //feed array buffer as a single array parameter into a file 
        //file io session --> file io handler cosntructor
        //upload file
        //file download handler 
        
        const jsonData = {
            id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            title: document.getElementById("title").value,
            department: document.getElementById("department").value,
            email: document.getElementById("email").value,
        }

        console.log(jsonData)

        // Convert JSON object to a string
        const jsonString = JSON.stringify(jsonData);

        // Create a new TextEncoder instance
        const encoder = new TextEncoder();

        // Encode the string as UTF-8 and obtain the ArrayBuffer
        const arrayBuffer = encoder.encode(jsonString).buffer;

        console.log(arrayBuffer)

        // Create a new Blob object from the ArrayBuffer
        const blob = new Blob([arrayBuffer], { type: "application/octet-stream" });

        // Create a URL for the Blob object
        const blobURL = URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement("a");

        // Set the href and download attributes
        link.href = blobURL;
        link.download = "file.bin";

        // Simulate a click on the link to trigger the download
        link.click();

        // Clean up by revoking the URL
        URL.revokeObjectURL(blobURL);


        // new file 
        // array of data
        
        // var file = new File(arrayBuffer, jsonData.id)

        // const upload = FileUploadHandler()

        // upload.trackFile(file, "/home")



        // Now you have the JSON data as an ArrayBuffer
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
            <button onClick={doStuff}>do stuff</button>
            {popupOpen &&
            <Button 
                style={{margin:"10px"}}
                onClick={handleAddEmployee}> Add Employee
            </Button>
            }
            <Button 
                style={{margin:"10px"}}
                onClick={handlePopupClick}> {popupOpen ? "Close" : "Add Employee"}
            </Button>
            {popupOpen && 
            <div style={{width: "500px", margin:"0px auto"}}>
                <form name="employee-form">
                {Object.keys(data[0]).map(text => 
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" style={{width:"125px", textAlign:"right"}}>
                        {titleCase(text)}
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            id ={text}
                        />
                    </InputGroup>
                )}
            </form></div>}
            {loaded ? 
            <div className="container">
                {!popupOpen && <Table datas={data}/>}
            </div> : <p>Loading...</p>}
        </section>
    );
}

export default People;