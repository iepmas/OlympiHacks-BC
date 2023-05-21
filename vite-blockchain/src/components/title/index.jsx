import "./title.css"

export function Title(props){
  return(
      <div className="title" style={{display:"flex"}}>
          <div className='icon-xl'>
              <props.icon id="icon" size={30}/>
          </div>
          <div style={{marginLeft: "20px", marginTop: "5px"}}>
              <h1>{props.title}</h1>
          </div>
          <div style={{position: "absolute", right: 39, top: 87}}>
            <h1>Dolphin Chains HR Solutions</h1>
          </div>
          <div className='break'></div>
          <hr className="rounded"></hr>
      </div>
  )
}
