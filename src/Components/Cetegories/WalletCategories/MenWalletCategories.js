import React from "react";
import { useState } from "react";
import { menWallet } from "../../../AllData/Wallet";

const MenWalletCategories = () => {
  const [menWallets, setMenWallets] = useState(menWallet);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
      {menWallets.map((singleMenWallet) => (
        <div className="col">
          <div className="card h-100">
            <img
              // style={{ height: "300px", width: "100%" }}
              src={singleMenWallet.img}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenWalletCategories;