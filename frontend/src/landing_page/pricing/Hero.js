import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted mt-3 fs-5'>Free equity investments and flat ₹20 traday and F&O trades</h3>
            </div>
            <div className='row p-5 mt-5'>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg'></img>
                    <h1 className='text-center fs-3'>Free equity delivery</h1>
                    <p className='text-muted text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/intradayTrades.svg'></img>
                    <h1 className='text-center fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg'></img>
                    <h1 className='fs-3 text-center'>Free direct MF</h1>
                    <p className='text-muted text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha Account</h1>
                <p>Modern platforms and apps, 70 investments, and flat 720 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
          </div>
        </div>
     );
}

export default Hero; 