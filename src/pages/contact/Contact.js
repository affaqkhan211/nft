import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <h1 className='text-center white-color mt-5 mb-5'>Contact Us</h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <i class="fa fa-phone white-color" style={{ fontSize: "30px" }}></i>
              <h4 className='white-color'>Phone</h4>
              <p className='white-color'>+9267572568</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <i class="fa fa-envelope white-color" style={{ fontSize: "30px" }}></i>
              <h4 className='white-color'>Email</h4>
              <p className='white-color'>example@gmail.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <i class="fa fa-map-marker white-color" style={{ fontSize: "30px" }} aria-hidden="true"></i>
              <h4 className='white-color'>Location</h4>
              <p className='white-color'>Pakistan</p>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <form>
            <div class="form-group">
              <div className="row">
                <div className="col-6 ">
                  <label for="exampleInputEmail1" className='white-color mb-1'>Full Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-6">
                  <div class="form-group">
                    <label for="exampleInputPassword1" className='white-color mb-1'>Subjects</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <label for="exampleInputEmail1" className='white-color mt-4 mb-1'>Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <label for="exampleInputEmail1" className='white-color mt-4 mb-1'>Password</label>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <label for="exampleInputEmail1" className='white-color mt-4 mb-1'>Message</label>
                <input type="text" class="form-control" style={{height : "300px"}} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
              </div>
            </div>


            <div className="text-center">
            <button type="submit" class="btn btn-navbar mt-3" style={{width : "120px"}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact