import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
        {/* Row 1 */}
        <div className="row p-5 mt-5 mb-3">
          <h1 className="fs-2 mb-5">
            To create a ticket, select a relevant topic
          </h1>
      
          <div className="col-4 p-4">
            <h4><i className="fa fa-plus-circle me-2" aria-hidden="true"></i>Account Opening</h4>
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Online Account Opening</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Offline Account Opening</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership and HUF Account</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>NRI Account Opening</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charges at Zerodha</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting Started</a><br />
          </div>
      
          <div className="col-4 p-4">
            <h4><i className="fa fa-user me-2" aria-hidden="true"></i>Your Zerodha Account</h4>
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Login Credentials</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account Modification & Segment Addition</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>DP ID & Bank Details</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Transfer & Conversion of Shares</a><br />
          </div>
      
          <div className="col-4 p-4">
            <h4><i className="fa fa-bar-chart me-2" aria-hidden="true"></i>Trading & Platforms</h4>
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite Web & Mobile</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>GTT</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Sentinel</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>StockReports+</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Pi and Other Platforms</a><br />
          </div>
        </div>
      
        {/* Row 2 (Separate from Row 1) */}
        <div className="row p-5 mt-3 mb-5">
          <div className="col-4 p-4">
            <h4><i className="fa fa-credit-card me-2" aria-hidden="true"></i>Funds</h4>
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding Funds</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Funds Withdrawal</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>eMandates</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding Bank Accounts</a><br />
          </div>
      
          <div className="col-4 p-4">
            <h4><i className="fa fa-desktop me-2" aria-hidden="true"></i>Console</h4>
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Reports</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Ledger</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Portfolio</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>60 Day Challenge</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>IPO</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Referral Program</a><br />
          </div>
      
          <div className="col-4 p-4">
            <h4><i className="fa fa-money me-2" aria-hidden="true"></i>Coin</h4>
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Understanding Mutual Funds</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>About Coin</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Buying and Selling Through Coin</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Starting an SIP</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Managing Your Portfolio</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Moving to Coin</a><br />
            <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Government Securities</a><br />
          </div>
        </div>
      </div>
     );
}

export default CreateTicket;