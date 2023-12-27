import { useContext, useRef } from "react"
import { userContext } from "./userApp"

export default function UserAdd(){

    const context = useContext(userContext)
    const idRef = useRef()
    const fullnameRef = useRef()
    const countryRef = useRef()

    const reset = () =>{
        fullnameRef.current.value = ""
        countryRef.current.value = ""
    }

    const handelSubmit = (e) =>{
        e.preventDefault()
        context.addUser({
            payload : {
                id : idRef.current.value,
                fullname : fullnameRef.current.value,
                country : countryRef.current.value
            }
        })
        reset()

    }


    return <div className="container w-50 mt-5">
        <form onSubmit={handelSubmit}>
            <h1>Add:</h1>
            <hr />
            <div class="mb-3">
                <label for="" class="form-label">Id:</label>
                <input type="text" disabled class="form-control" ref={idRef} id="id" value={context.lastId+1}/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Fullname:</label>
                <input type="text" ref={fullnameRef} class="form-control" id="fullname" />
            </div>
            <label for="" class="form-label" >Country:</label>
            <select class="form-select" ref={countryRef} id="country">
                <option value="Morocco">Morocco</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Algeria">Algeria</option>
            </select>
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
}