import React from 'react'
import ProjectsComponent from '../componenets/ProjectsComponent'
const Plantdb = () => {
  return (
    <div>
<div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Plant Database</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Plant Database</li>
                        </ol>
                    </nav>
                </div>
            </div>
      <ProjectsComponent/>

    </div>
  )
}

export default Plantdb
