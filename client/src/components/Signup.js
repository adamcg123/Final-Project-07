import React,{useState} from 'react'
import {Link} from 'react-router-dom'


const Signin = () =>{
    const [name,setName]= useState("")
    const [password,setPassword]= useState("")
    const [email,setEmail]= useState("")
    const PostData = () =>{
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"" ,
                password: "",
                email: ""
            })
          })  .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })

    }
    return(
     <div className='mycard'>
          <div className="card auth-card input-field ">
          <h2> Camera Cast</h2>
          <input type= "text"  placeholder='name'/>
          <input type= "text"  placeholder='email'/>
              <input type= "text" placeholder='password'/>
  <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=> PostData()}> Singup </button>
        <h5>
            <Link to= "/signin"> Already have an account ? </Link>
        </h5>


      </div>
     </div>
    )
}
export default Signin;