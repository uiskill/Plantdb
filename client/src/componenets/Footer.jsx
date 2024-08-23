import React from 'react'

const Footer = () => {
  return (
    <div>

   

    <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-8 text-center text-md-start mb-3 mb-md-0">
                    &copy; 2024-25. All Right Reserved.
                </div>
                <div className="col-md-4 text-right text-md-end">
                   
                <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Footer
