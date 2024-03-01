function SignUp(){
    return<>
    <div className="container border" id="signup-form">
        <h3 className="text-danger text-center">Sign Up Form</h3>
        <div className="row">
            <div className="col-md-12 mt-2">
                <input className="form-control" placeholder="enter your name "/>
            </div>
            <div className="col-md-12 mt-2">
                <input className="form-control" placeholder="enter your Email "/>
            </div>
            <div className="col-md-12 mt-2">
                <input className="form-control" placeholder="enter your mobile "/>
            </div>
            <div className="col-md-12 mt-2">
                <input type="password" className="form-control" placeholder="enter your password "/>
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
        </div>
    </div>
    </>
}

export default SignUp;