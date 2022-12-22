import React from 'react';

const Card = () => {


    return (
        
                    <div className="container" id='block-card'>

                            <div className="row mb-3 mx-auto text-light" id='card'>


                                <div className="col-md-4 block" >
                                    <h3 className='card-date'><h5>23º</h5> San Francisco
                                    </h3>
                                    <img src="https://images.pexels.com/photos/13551483/pexels-photo-13551483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start mid2" alt="..."/>
                                </div>


                                <div className="col-md-4 block " >
                                <h3 className='card-date' id='mid' >
                                <h5>23º</h5> Londres</h3>
                                    <img  src="https://images.pexels.com/photos/13551483/pexels-photo-13551483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start mid2" alt="..."/>
                                    
                                </div>


                                <div className="col-md-4 block">
                                <h3 className='card-date'><h5>23º</h5> Argentina
                                </h3>
                                    <img src="https://images.pexels.com/photos/13551483/pexels-photo-13551483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start mid2" alt="..."/>
                                </div>

                                </div>

                                
                        </div>

//     <div class="container">
//         <div class="row card-group">
//     <div class="col card col-md-4 card-1">
//         <img src="https://images.pexels.com/photos/13551483/pexels-photo-13551483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."/>
//     </div>
//         <div class=" col-md-4 card-1">
//             <img src="https://images.pexels.com/photos/13551483/pexels-photo-13551483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."/>
//     </div>
//         <div class=" col-md-4 card-1">
//             <img src="https://images.pexels.com/photos/13551483/pexels-photo-13551483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="."/>
//         </div>
//     </div>
// </div>
            );
}

export default Card;