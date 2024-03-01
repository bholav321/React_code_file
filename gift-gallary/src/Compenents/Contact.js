function Contact() {
    return <>
        <div className="container-fluid d-flex mt-3">
            <div className="container-fluid bg-light border d-flex justify-content-center align-content-center flex-column" id="left-form">
                <h3 className=''>Let's get in touch</h3>
                <p>Our support specialists are committed to providing personalized assistance to ensure your satisfaction. Whether it's troubleshooting, product inquiries, or general assistance, we're here to help. Contact us today to experience top-notch support tailored to your needs.</p>
                <img src="./Images/left1.jpg" width='550px' height='400px' />
            </div>
            <div id="right-form" className="container-fluid bg-danger d-flex flex-column ">
                <h1 className='text-white'>Contact Us</h1>
                <p>How can we help you ?</p>
                <form className="form-group" id="form">
                    <input className="form-control" placeholder="Full Name" />
                    <input className="form-control mt-2" placeholder="Email" />
                    <input className="form-control mt-2" placeholder="Phone" />
                    <input className='form-control mt-2' placeholder='Your Subject' />
                    <textarea className="form-control mt-2" placeholder="Your Message..."></textarea>
                    <button className='btn btn-success mt-2'>Submit</button>

                </form>
            </div>
        </div>
    </>
}
export default Contact;

//https://authn.edx.org/register?course_id=course-v1%3AW3Cx%2BJS.0x%2B2T2023&enrollment_action=enroll&email_opt_in=false
// login form