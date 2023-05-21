import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Title } from "../title";
import { BsFillPeopleFill as Icon} from "react-icons/bs";
import Table from "./table";
import "./people.css"
import { 
    FileIo,
    FileUploadHandler, 
    WalletHandler,
    StorageHandler
} from "jackal.js"


function People() {
    const [popupOpen, setPopupOpen] = useState(false)
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)

    const chainConfig =
    {
        chainId: 'jackal-1',
        chainName: 'Jackal Mainnet',
        rpc: 'https://rpc.jackalprotocol.com',
        rest: 'https://api.jackalprotocol.com',
        bip44: {
        coinType: 118
        },
        coinType: 118,
        stakeCurrency: {
        coinDenom: 'JKL',
        coinMinimalDenom: 'ujkl',
        coinDecimals: 6
        },
        bech32Config: {
        bech32PrefixAccAddr: 'jkl',
        bech32PrefixAccPub: 'jklpub',
        bech32PrefixValAddr: 'jklvaloper',
        bech32PrefixValPub: 'jklvaloperpub',
        bech32PrefixConsAddr: 'jklvalcons',
        bech32PrefixConsPub: 'jklvalconspub'
        },
        currencies: [
        {
            coinDenom: 'JKL',
            coinMinimalDenom: 'ujkl',
            coinDecimals: 6
        }
        ],
        feeCurrencies: [
        {
            coinDenom: 'JKL',
            coinMinimalDenom: 'ujkl',
            coinDecimals: 6,
            gasPriceStep: {
            low: 0.002,
            average: 0.002,
            high: 0.02
            }
        }
        ],
        features: []
    }

    const walletConfig =
    {
    selectedWallet: 'keplr',
    signerChain: 'jackal-1',
    enabledChains: ['jackal-1'],
    queryAddr: 'https://grpc.jackalprotocol.com',
    txAddr: 'https://rpc.jackalprotocol.com',
    chainConfig: chainConfig
    }

    

    useEffect(() => {
        loadTable()

    }, [])

    const  doStuff = async () => {
        const wallet = await WalletHandler.trackWallet(walletConfig);
        const storage = await StorageHandler.trackStorage(wallet)

        const f =  await FileIo.trackIo(wallet)
        console.log(f.verifyFoldersExist(["home"]))
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

    const handleAddEmployee = async () => {
        
        const jsonData = {
            id: document.getElementById("id").value,
            name: document.getElementById("name").value,
            title: document.getElementById("title").value,
            department: document.getElementById("department").value,
            email: document.getElementById("email").value,
        }

        console.log(jsonData)

        const jsonString = JSON.stringify(jsonData);

        const bytes = new TextEncoder().encode(jsonString);
        const blob = new File([bytes], 'testFile', {
            type: "application/json;charset=utf-8"
        });
        
        const upload = await FileUploadHandler.trackFile(blob, 's/home')

        const wallet = await WalletHandler.trackWallet(walletConfig);
        const f =  await FileIo.trackIo(wallet, '1.0.8')

        const uploadList = {}

        uploadList['testFile'] = {
          data: null,
          exists: false,
          handler: upload,
          key: 'testFile',
          uploadable: await upload.getForUpload()
        }

        const folder = await f.downloadFolder('s/home')

        const stagger = await f.staggeredUploadFiles(uploadList, folder, {})

        console.log(upload)

        console.log(stagger)
    }

    const doMoreStuff = async () => {
        const wallet = await WalletHandler.trackWallet(walletConfig);
        const storage = await StorageHandler.trackStorage(wallet)

        const s = await FileIo.trackIo(wallet)
        const folder = await s.verifyFoldersExist(['home'])
        const files = await s.downloadFolder('s/home')
        const obj = {
            rawPath: 's/home/testFile',
            owner: 'jkl12drs4lqvhamlyrlyc3gnzr247djmgle5rrdsrh',
            isFolder: false
        }
        const testfile = await s.downloadFile(obj, { track: 0 })

        const buff = await testfile.receiveBacon().arrayBuffer()

        var enc = new TextDecoder("utf-8");
        var arr = new Uint8Array(buff)
        console.log(enc.decode(arr));

        console.log(folder)
        console.log(files)
        console.log(buff)

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
            <button onClick={doMoreStuff}>do more stuff</button>
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
                    <InputGroup className="mb-3" key={text}>
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