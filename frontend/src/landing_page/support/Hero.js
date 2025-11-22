import React from 'react';

function Hero() {
    return (  
        <div classname='container-fluid' id='supportHero'>
                <div className='p-5' id='supportWrapper'>
                    <h4>Support Portal </h4>
                    <a href=''>Track Tickets</a>
                </div>
            <div className='row p-5 m-3'>
                <div className='col-6 p-3'>
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eg: how do i activate F&O, why is my order getting rejected.'></input><br />
                <a href=''>Track account opening </a>
                <a href='' style={{ marginLeft: "25px" }}>Track segment activation </a>
                <a href='' style={{ marginLeft: "25px" }}>Intraday  </a>
                <a href='' style={{ marginLeft: "25px" }}>margins </a>
                <a href='' style={{ marginLeft: "25px" }}>Kite user manual</a>
                </div>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li style={{ lineHeight: "2.5" }}><a href=''>Current Takeovers and Delisting - January 2024 </a> </li>
                        <li style={{ lineHeight: "2.5" }}><a href=''>Latest Intraday leverages - MIS & CO </a> </li>
                    </ol>
                    
                </div>
            </div>     
        </div>
    );
}

export default Hero;