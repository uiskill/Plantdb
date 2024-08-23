import React from 'react'


const Monitor = () => {
  return (
    <div>

           <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Monitor</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Monitor</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container text-left">
                    <h4 className='text-left'><strong>NOTE :</strong> We’re excited to inform you that we are currently in the process of developing our own comprehensive monitoring system tailored specifically for your needs. This system will provide real-time insights into your plants moisture level and water level ensuring optimal care and growth.While we’re building our own monitoring system, please use this trusted third-party tool to monitor your plants’ health in real time. We’re working hard to provide you with a comprehensive solution soon.</h4>
                   
                    <br />
                    <a href="https://blynk.cloud/dashboard/login"  target="_blank" class="btn btn-primary btn-md py-sm-3 px-sm-4">Monitor</a>
                </div>
            </div>







         
    </div>
  )
}

export default Monitor
