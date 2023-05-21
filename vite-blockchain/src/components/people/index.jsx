import { useEffect, useState } from "react";
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
    const [loading, setLoading] = useState(false)
    const [folderName, setFolderName] = useState("")

    const employeeInfo = [
        "id",
        "name",
        "title",
        "department",
        "email",
        "address",
        "phone",
        "bankNumber",
    ]

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

    }, [])

    const  makeFolder = async () => {
        const wallet = await WalletHandler.trackWallet(walletConfig);
        const storage = await StorageHandler.trackStorage(wallet)

        const f =  await FileIo.trackIo(wallet)
        console.log(f.verifyFoldersExist([folderName]))
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
            address: document.getElementById("address").value,
            phone: document.getElementById("phone").value,
            bankNumber: document.getElementById("bankNumber").value,
        }

        const fileName = ((document.getElementById("id").value).toString() + "_" 
            + (document.getElementById("name").value).toString()).replace(/\s/g, '')

        const jsonString = JSON.stringify(jsonData);

        const bytes = new TextEncoder().encode(jsonString);
        const blob = new File([bytes], fileName, {
            type: "application/json;charset=utf-8"
        });
        
        const upload = await FileUploadHandler.trackFile(blob, `s/${folderName}`)

        const wallet = await WalletHandler.trackWallet(walletConfig);
        const f =  await FileIo.trackIo(wallet, '1.0.8')

        const uploadList = {}

        uploadList[fileName] = {
          data: null,
          exists: false,
          handler: upload,
          key: fileName,
          uploadable: await upload.getForUpload()
        }

        const folder = await f.downloadFolder(`s/${folderName}`)

        const stagger = await f.staggeredUploadFiles(uploadList, folder, {})
        console.log(`Created file: ${fileName}`)
        alert(`Created file: ${fileName}`)

        console.log(upload)
        console.log(stagger)
        setPopupOpen(false)
    }

    const readEmployees = async () => {
        setLoading(true)

        const wallet = await WalletHandler.trackWallet(walletConfig);
        const storage = await StorageHandler.trackStorage(wallet)

        const s = await FileIo.trackIo(wallet)
        const folder = await s.verifyFoldersExist([folderName])
        const files = await s.downloadFolder(`s/${folderName}`)
        const filePaths = Object.keys(files.folderDetails.fileChildren)
        const owner = files.folderDetails.whoOwnsMe.toString()
        const result = []
        for (var i = 0; i < filePaths.length; i++){
            if(filePaths[i] === 'undefined'){
                continue
            }
            const obj = {
                rawPath: `s/${folderName}/${filePaths[i]}`,
                owner: owner,
                isFolder: false
            }
            console.log(obj)
            const testfile = await s.downloadFile(obj, { track: 0 })
            const buff = await testfile.receiveBacon().arrayBuffer()
    
            var enc = new TextDecoder("utf-8");
            var arr = new Uint8Array(buff)
            var jsonReturn = JSON.parse(enc.decode(arr))
            result.push(jsonReturn)
            
            
        }
        setData(result)
        console.log('DONE');
        console.log(folder)
        console.log(files)
        setLoaded(true)
        setLoading(false)
    }

    const handleSetFolder = () => {
        setFolderName(document.getElementById("folderName").value)
        makeFolder()
        alert(`Folder selected: ${folderName}`)
    }

    
    return(
        <section>
            <Title title={"People"} icon={Icon}/>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:"125px", textAlign:"right"}}>
                Folder Name
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    id ='folderName'
                />
            </InputGroup>
            <button onClick={handleSetFolder} style={{marginRight:"10px"}}>Set Folder</button>
            <button onClick={readEmployees}>Load Employees</button>
            {popupOpen &&
            
            <button 
                style={{margin:"10px"}}
                onClick={handleAddEmployee}> Add Employee
            </button>
            }
            <button 
                style={{margin:"10px"}}
                onClick={handlePopupClick}> {popupOpen ? "Close" : "Add Employee"}
            </button>
            {!loaded && loading ? <p style={{color:"#fff"}}>loading...</p> : null}
            {popupOpen && 
            <div style={{width: "500px", margin:"0px auto"}}>
                <form name="employee-form">
                {employeeInfo.map(text => 
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
            {!loading && loaded ? 
            <div className="container">
                {!popupOpen && loaded && <Table datas={data}/>}
            </div> : null}
        </section>
    );
}

export default People;