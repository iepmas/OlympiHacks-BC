import { Title } from "../title";
import { AiFillHome as Icon} from "react-icons/ai";
import ToDoList from "./ToDoList";
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    
    return(
        <div>
            <Title title={"Home"} icon={Icon}/>
            <div style={{display:"flex"}}>
                <Card className="shadow" style={{backgroundImage: "linear-gradient(346deg, #a989ce, transparent)", marginLeft: "50px", width: "55%", display: "flex", alignItems: "center", backgroundColor: "#f9f8ff"}}>
                    <div style={{marginTop: "131px", paddingLeft: "20px", paddingRight: "20px"}}>
                        <h1 style={{whiteSpace: "pre-wrap"}}>Your go-to destination for secure, streamlined HR and payroll</h1>
                    </div>
                </Card>
                <div style={{width: "45%"}}>
                 <Image src="/ctr-dolph.png" roundedCircle style={{width: "400px", height: "400px"}}/>
                </div>
            </div>
            <div className="card shadow" style={{backgroundImage: "linear-gradient(346deg, #a989ce, transparent)",paddingTop: "50px", paddingBottom: "50px", marginTop: "50px", marginLeft: "50px", marginRight: "50px", display: "flex", alignItems: "center", backgroundColor: "#f9f8ff"}}>
                <div className="card-body">
                <h1>Your workforce protected by blockchain technologies</h1>
                <h5 style={{marginTop: "10px", width: "80%", marginLeft: "100px"}}>Dolphin Chains HR Solutions leverages secure, decentralized cloud storage provided by Jackal Labs to keep your data <strong>safe, reliable, and accessible</strong>.</h5>
                </div>
            </div>
            {/* <Card style={{marginLeft: "50px", marginRight: "50px", marginTop: "50px", display: "flex", alignItems: "center", backgroundColor: "#dad2f3"}}>
            <div style={{marginTop: "120px", marginLeft: "30px"}}>
                <ToDoList/>
            </div>
            </Card> */}
        </div>
    );
}

export default Home;