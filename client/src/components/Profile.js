import React from 'react'

const Profile = () =>{
    return(
       <div style={{
           display : "flex",
           justifyContent:"space-around",
           margin: "18px 0px",
           borderBottom:"1px solid grey"
       }}>
       <div> <img style={{width:"160px", height:"160px", borderRadius:"80px"}} 
       src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/></div>
       <div> 
       <h4>Zeeshan Mufti</h4>
       <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
       <h6>40 posts</h6>
       <h6>40 followers</h6>
       <h6>40 following</h6>

       </div>
       </div>

       </div>
    )
}
export default Profile