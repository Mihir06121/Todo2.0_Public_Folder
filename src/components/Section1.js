import React,  {useEffect} from 'react'
import lander from '../ss/logo.png'
import loader from '../ss/loader.png'
import teamCreate from '../ss/teamcreate.png'
import todoCreate from '../ss/todocreate.png'
import AOS from 'aos'
const Section1 = () => {

    AOS.init({
        duration:'1200'
    })

    // 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

    return (
        <div className="p-3 container-fluid">
            <div className="container p-5"><h1 className="text-fluid display-md-1" data-aos="fade-down">PRESENTING TO YOU</h1></div>
            <div className="row shadow-lg p-5">
                <div className="pt-4 pb-4 col-sm d-flex 
                    justify-content-center align-items-center" style={{borderRight: "10px solid #0275d8"}} data-aos="fade-up" data-aos-delay="600">
                    <img className="p-5" src={lander} height="400px" alt="" />
                </div>
                <div className="col-sm d-flex 
                    justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="600">
                    <h1 className="display-1">TODO 2.0<br/><h1>0.1.0</h1></h1>
                </div>
            </div>
            {/* <div className=" shadow-lg p-5">
                <h1 className="p-2">Not a usual Todo App.</h1>
                <h1 className="p-2">Create Team and Assign Tasks.</h1>
            </div> */}
            <div>
                <div className="row p-5">
                    <div className="col-sm shadow-lg rounded-lg" >
                        <img className="img-fluid" src={loader} size="auto" alt="" />
                    </div>
                    <div className="col-sm d-flex 
                        justify-content-center align-items-center">
                        <div className="p-5" style={{borderBottom:"10px solid #0275d8"}}>
                            <h1 className="display-4">Not an usual Todo App.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row p-5">
                    <div className="col-sm shadow-lg rounded-lg" >
                        <img className="img-fluid p-5" src={teamCreate} size="auto" alt="" />
                    </div>
                    <div className="col-sm d-flex order-lg-first
                        justify-content-center align-items-center">
                        <div className="p-5" style={{borderBottom:"10px solid #0275d8"}}>
                            <h1 className="display-4">Create Teams</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="row p-5">
                    <div className="col-sm shadow-lg rounded-lg" >
                        <img className="img-fluid p-5" src={todoCreate} size="auto" alt="" />
                    </div>
                    <div className="col-sm d-flex
                        justify-content-center align-items-center">
                        <div className="p-5" style={{borderBottom:"10px solid #0275d8"}}>
                            <h1 className="display-4">Assign tasks to individual team members</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1