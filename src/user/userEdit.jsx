import { useContext, useEffect, useRef, useState } from "react"
import { userContext } from "./userApp"
import { useParams } from "react-router-dom"

export default function UserEdit(){
    const context = useContext(userContext)
    const param = useParams()
    const idRef = useRef()
    const fullnameRef = useRef()
    const countryRef = useRef()

    const {id} = param
    const user = context.users.find(user => user.id === id)
    const idUser = user.id
    const fullname = user.fullname
    const country = user.country


    const handelSubmit = (e) =>{
        e.preventDefault()
        console.log(fullnameRef.current.value)

        // context.addUser({
        //     payload : {
        //         id : idRef.current.value,
        //         fullname : fullnameRef.current.value,
        //         country : countryRef.current.value
        //     }
        // })
        // reset()
        

    }
    

    return<div className="container w-50 mt-5">
    <form onSubmit={handelSubmit}>
        <h1>Edit:</h1>
        <hr />
        <div class="mb-3">
            <label for="" class="form-label">Id:</label>
            <input type="text" disabled class="form-control" ref={idRef} id="id" value={idUser}/>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Fullname:</label>
            <input type="text" ref={fullnameRef} defaultValue={fullname} class="form-control" id="fullname" />
        </div>
        <label for="" class="form-label" >Country:</label>
        <select class="form-select" ref={countryRef} defaultValue={country} id="country">
            <option value="Morocco">Morocco</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Algeria">Algeria</option>
        </select>
        <br />
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
}