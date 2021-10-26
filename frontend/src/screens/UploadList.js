import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'

const UploadList = ({submit}) => {
  const [files, setFiles] = useState([])
  const [folderName, setFolderName] = useState()
  const [back,setBack]=useState(false)
  
  useEffect(() => {
         
          
          if(folderName){
            console.log('true');
            axios
            .get(`/api/uploadedfiles/${folderName}`)
            .then((res)=>setFiles(res.data))
          }else{
            axios
            .get('/api/uploadedfiles')
            .then((res)=>setFiles(res.data))
          }
          
              
    },[submit,folderName])
 
  return (
    < >
    
    <h1>Our Library</h1>
   <Button variant='success' onClick={()=>window.location.reload()}>Back</Button>
      {files.map((f)=>
        <div  key={f}>    
            
               {f.search(/\./)>0 ?
               <a
            className='list-group-item list-group-item-action flex-column align-items-start'
            href={folderName? `http://192.168.75.118:3500/uploads/${folderName}/${f}`:`http://192.168.75.118:3500/uploads/${f}`}
            style={{textDecoration:'underline', color:'blue',borderColor:'black', margin:'5px'}} 
             ><h4 className='mb-1'>
               {f} </h4></a>
               :
               <a
               className='list-group-item list-group-item-action flex-column align-items-start'
               onClick={()=>setFolderName(f)}
               style={{textDecoration:'underline', color:'red',borderColor:'black', margin:'5px'}} 
                ><h4 className='mb-1'>
                  {f} </h4></a>
               }
        </div>
      )}
      
    </>
  )
}

export default UploadList
