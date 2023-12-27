export default function UserForm() {
    return <>
        <div className="container w-50 mt-5">
            <form>
                <div class="mb-3 row">
                    <label htmlFor="fullName" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="fullName" name="fullName" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label htmlFor="age" class="col-sm-2 col-form-label">Age</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="age" name="age" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label htmlFor="country" class="col-sm-2 col-form-label">Country</label>
                    <div class="col-sm-10">
                        <select id='country' name='country' class="form-select" >
                            <option value=''>Select your country</option>
                            <option value="ma">Morocco</option>
                            <option value="dz">Algeria</option>
                            <option value="tn">Tunisia</option>
                        </select>
                    </div>
                </div>
                <div class="d-grid gap-2 d-flex justify-content-center mb-5">
                    <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Update your profile
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-lg px-4">Delete
                        Your profile
                    </button>
                </div>
            </form>
        </div>
    </>

}
