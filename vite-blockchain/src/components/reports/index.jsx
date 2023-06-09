import { useState } from "react";
import { Title } from "../title";
import { FaRegFile as Icon} from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { 
    FileIo,
    FileUploadHandler, 
    WalletHandler,
    StorageHandler
} from "jackal.js"


function Reports() {
    const [data, setData] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    const [folderName, setFolderName] = useState("")


    const FileInput = () => {
      
        const handleFileChange = (event) => {
          const file = event.target.files[0];
          setSelectedFile(file);
        };
      
        return (
          <div style={{color:'#fff', marginLeft: "68px", marginBottom: "20px"}}>
            <input type="file" onChange={handleFileChange} />
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
          </div>
        );
      };

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

    const  makeFolder = async () => {
        const wallet = await WalletHandler.trackWallet(walletConfig);
        const storage = await StorageHandler.trackStorage(wallet)

        const f =  await FileIo.trackIo(wallet)
        console.log(f.verifyFoldersExist([folderName]))
    }

    const handleAddFile = async () => {
        const upload = await FileUploadHandler.trackFile(selectedFile, `s/${folderName}`)

        const wallet = await WalletHandler.trackWallet(walletConfig);
        const f =  await FileIo.trackIo(wallet, '1.0.8')

        const uploadList = {}

        uploadList[selectedFile.name] = {
          data: null,
          exists: false,
          handler: upload,
          key: selectedFile.name,
          uploadable: await upload.getForUpload()
        }

        const folder = await f.downloadFolder(`s/${folderName}`)

        const stagger = await f.staggeredUploadFiles(uploadList, folder, {})
        console.log(`Added file: ${selectedFile.name}`)
        alert(`Created file: ${selectedFile.name}`)

        console.log(upload)
        console.log(stagger)
    }

    const readFiles = async () => {

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
            console.log(testfile)
            const f = await testfile.receiveBacon()
    
            result.push(f)
        }
        setData(result)
        console.log('DONE');
        console.log(folder)
        console.log(files)
    }


    
      const FileDownload = ({ file }) => {
        const handleDownload = () => {
          const url = URL.createObjectURL(file);
          const link = document.createElement('a');
          link.href = url;
          link.download = file.name; // Use the file object's name as the download filename
          link.click();
          URL.revokeObjectURL(url); // Clean up the URL object
        };
      
        return (
          <div style={{marginBottom: "10px"}}>
            <button onClick={handleDownload}>{file.name}</button>
          </div>
        );
      };

      const handleSetFolder = () => {
        setFolderName(document.getElementById("folderName").value)
        makeFolder()
        alert(`Folder selected: ${folderName}`)
    }

    
    return(
        <section>
            <Title title={"Reports"} icon={Icon}/>
            <div>
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
            </div>
            <div>
            <FileInput/>            
            </div>
            <div>
            <button 
                style={{margin:"10px"}}
                onClick={handleAddFile}> Add File
            </button>
            <button 
                style={{margin:"10px"}}
                onClick={readFiles}> Read Files
            </button> 
            </div>
            {data && data.length ? data.map(f => 
                <FileDownload file={f} key={f.name}/> 
                ): null}

        </section>
    );
}

export default Reports;