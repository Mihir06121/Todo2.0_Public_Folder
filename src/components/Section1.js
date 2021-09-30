import React,  {useState} from 'react'
import lander from '../ss/logo.png'
import loader from '../ss/loader.png'
import teamCreate from '../ss/teamcreate.png'
import todoCreate from '../ss/todocreate.png'
import todoDetailAssigned from '../ss/tododetailsassigned.png'
import AOS from 'aos'
const Section1 = () => {

    AOS.init({
        duration:'1200'
    })

    // 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

    return (
        <div className="p-3 container">
            <div className="container p-5"><h1 className="text-fluid display-md-1" data-aos="fade-down">PRESENTING TO YOU</h1></div>
            <div className="row shadow-lg">
                <div className="pt-4 pb-4 col-sm d-flex 
                    justify-content-center align-items-center" style={{borderRight: "10px solid #0275d8"}} data-aos="fade-up" data-aos-delay="600">
                    <img className="p-5" src={lander} height="400px" alt="" />
                </div>
                <div className="col-sm d-flex 
                    justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="600">
                    <h1 className="display-1">TODO 2.0<br/><h2>beta version 0.1.0</h2></h1>
                </div>
            </div>
            {/* <div className=" shadow-lg p-5">
                <h1 className="p-2">Not a usual Todo App.</h1>
                <h1 className="p-2">Create Team and Assign Tasks.</h1>
            </div> */}
            <div className="">
                <div className="row p-5">
                    <div className="col-sm shadow-lg rounded-lg" data-aos="fade-up">
                        <img className="img-fluid" src={loader} size="auto" alt="" />
                    </div>
                    <div className="col-sm d-flex 
                        justify-content-center align-items-center" data-aos="zoom-in-left" data-aos-delay="700 ">
                        <div className="p-5" style={{borderBottom:"10px solid #0275d8"}}>
                            <h1 className="display-4 text-left">Not an usual Todo App.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="row p-5">
                    <div className="col-sm shadow-lg rounded-lg" data-aos="fade-up" data-aos-delay="700" >
                        <img className="img-fluid p-sm-5" src={teamCreate} size="auto" alt="" />
                    </div>
                    <div className="col-sm d-flex order-lg-first
                        justify-content-center align-items-center" data-aos="fade-right" data-aos-delay="700" >
                        <div className="p-5" style={{borderBottom:"10px solid #0275d8"}}>
                            <h1 className="display-4 text-left">TODO 2.0 comes with unique idea of creating teams</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="row p-5">
                    <div className="col-sm shadow-lg rounded-lg" data-aos="fade-down">
                        <img className="img-fluid" src={todoCreate} size="auto" alt="" />
                    </div>
                    <div className="col-sm d-flex
                        justify-content-center align-items-center"data-aos="zoom-in-left">
                        <div className="p-5" style={{borderBottom:"10px solid #0275d8"}}>
                            <h1 className="display-4 text-left">Assign tasks to individual team members</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row p-5">
                    <div className="col-sm shadow-lg rounded-lg" >
                        <img className="img-fluid" src={todoDetailAssigned} size="auto" alt="" />
                    </div>
                    <div className="col-sm d-flex
                        justify-content-center align-items-center order-lg-first">
                        <div className="p-5" style={{borderBottom:"10px solid #0275d8"}}>
                            <h1 className="display-4 text-left">Team member can discuss with the team leader about the todo assigned.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="text-left">
                    <h1>This application is in its beta version(0.1.0).</h1>
                    <h1>Following are few update that would be included in future beta versions.</h1>
                    <ul className="p-3">
                        <li><h3>Socket.io for live discussion.</h3></li>
                        <li><h3>Implementing email verification.</h3></li>
                        <li><h3>Pdf sharing.</h3></li>
                        <li><h3>List of users based on contacts list instead of displaying every user from DB.</h3></li>
                        <li><h3>Improve in local notification and server notifications.</h3></li>
                        <li><h3>Bugs fix and imprive stability.</h3></li>
                    </ul>
                    <div className="pt-5 pb-5">
                        <h2>Report any bugs or crashes, your review on this application 
                            is helpfull for me to provide you with more efficiant and stable application.</h2>
                    </div>
                    <div className="p-5 text-white bg-danger rounded">
                        <h1>Warning!</h1>
                        <h4>This application is in its beta version, your account, data present in this app may or
                            may not be deleted, however prior notifications will be provided before any changes.
                        </h4>
                        <h4>Your data will only be used for texting the application.</h4>
                        <h4>It is recommended to enter valid email address, it will be helpfull for me to reach the users and solve the bugs faced.</h4>
                    </div>
                    <div className="p-5">
                        <a href="../apk/base.apk">Download TODO 2.0</a>
                    </div>
                    <div className="p-5">
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1