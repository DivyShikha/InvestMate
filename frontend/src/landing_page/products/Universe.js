import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center '>
                <h1>The Zerodha Universe</h1>
                <p classNmae='mt-5'>Extend your trading and investment experience even further with our
                partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png'></img>
                    <p className='text-muted text-small mt-3'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png'  style={{width:'36%'}}></img>
                    <p className='text-muted text-small mt-3'>Algo & strategy platform</p>
                </div> 
                <div className='col-4 p-3 mt-5'>
                <img src='media/images/sensibullLogo.svg' style={{width:'50%'}}></img>
                    <p className='text-muted text-small mt-4'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:'40%'}}></img>
                    <p className='text-muted text-small mt-3'>Asset managememnt</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/goldenpiLogo.png'></img>
                    <p className='text-muted text-small mt-3'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{width:'25%'}}></img>
                    <p className='text-muted text-small mt-3'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;