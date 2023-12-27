import { useContext } from "react"
import { userContext } from "./userApp"
import { Link } from "react-router-dom"

export default function UserTable(){
    const context = useContext(userContext)
    return <div className="container w-80 mt-5">
        <table class="table table-bordered table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FULLNAME</th>
                    <th scope="col">COUNTRY</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {(context.users.length > 0) ?
                context.users.map((user, key) => <tr key={key}>
                    <td>{user.id}</td>
                    <td>{user.fullname}</td>
                    <td>{user.country}</td>
                    <td><Link to={`/user/${user.id}/edit`}><button className="btn btn-success me-3">Edit</button></Link></td>
                </tr>)
                : <tr><td colspan={3} className="text-center">no users</td></tr>}
            </tbody>
        </table>
    </div>
}