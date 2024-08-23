import React from 'react'


const Resourses = () => {
    return (
        <div>

            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-3 text-white mb-4 animated slideInDown">Resourses</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Resourses</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="container text-center py-5">
                <p>Welcome to the Resource Section of our QR-Based Plant Information System. Here, you’ll find a wealth of resources to deepen your knowledge and appreciation of the botanical world. Whether you’re a student, a gardener, or simply someone who loves plants, we’ve curated a collection of educational materials, tools, and references to support your botanical journey.</p>


                <div class="row p-2">
                    <div className="col-sm-6 ">
                        <div className="rounded bg-success p-5">
                            <h4>Plant Care Guides</h4>
                            <p>“Explore our comprehensive plant care guides, offering expert advice on everything from watering and fertilizing to pest management and pruning.”</p><br /><br />

                            <a href="https://garden.org/learn/howto/grow/" target="_blank" class="btn btn-primary btn-md" >Read More</a>
                        </div>
                    </div>

                    <div className="col-sm-6 ">
                        <div className="rounded bg-info p-5">

                            <h4>Botanical Glossary</h4>
                            <p>“Expand your botanical vocabulary with our glossary of terms. From anatomical structures and reproductive processes to growth habits and ecological interactions, our glossary covers a wide range of botanical concepts in an accessible and easy-to-understand format.”</p>
                            <a href="https://drive.google.com/file/d/1AKV1bYQ0PrV83kL9EmLVTcyU1aE41ChK/view" target="_blank" class="btn btn-primary btn-md" >Read More</a>
                        </div>
                    </div>


                </div>




                <div class="row p-2">
                    <div className="col-sm-6 ">
                        <div className="rounded bg-light p-5">
                            <h4>Educational Videos</h4>
                            <p>“Dive into the world of plants with our collection of educational videos. From documentaries exploring the wonders of plant life to tutorials demonstrating gardening techniques, our videos offer engaging and informative content for learners of all ages.”</p>
                            <a href="#" target="_blank" class="btn btn-primary btn-md" >Read More</a>
                        </div>
                    </div>

                    <div className="col-sm-6 ">
                        <div className="rounded bg-danger  p-5">

                            <h4>Recommended Reading</h4>
                            <p>“Browse our list of recommended books, articles, and publications to further enrich your understanding of plants. From classic botanical texts to the latest research findings, our curated reading list offers a diverse selection of resources for avid readers and researchers alike.”</p>
                            <a href="https://archive.org/details/firstbookofplant00dickrich/mode/2up?view=theater" target="_blank" class="btn btn-primary btn-md" >Read More</a>
                        </div>
                    </div>


                </div>

                <div class="row p-2">
                    <div className="col-sm-12 ">
                        <div className="rounded bg-warning  p-5">
                            <h4>Online Courses</h4>
                            <p>“Take your botanical knowledge to the next level with our curated selection of online courses. Whether you’re interested in plant identification, ecology, ethnobotany, or sustainable gardening practices, our courses provide in-depth learning opportunities taught by experts in the field.”</p>
                            <a href="https://alison.com/courses?query=gardening" target="_blank" class="btn btn-primary btn-md" >Read More</a>

                        </div>
                    </div>



                </div>


            </div>



        </div>
    )
}

export default Resourses
