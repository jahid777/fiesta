import React from "react";
import { Link } from "react-router-dom";

import WalletCategories from "../../Cetegories/WalletCategories/WalletCategories";

const Wallet = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "350px", width: "100%" }}
          src="https://i.imgur.com/saMitQk.jpg"
          alt=""
        />
      </div>
      <div className="container-fluid mt-5">
        <div className="m-4">
          <ul className="nav nav-tabs" id="myTab">
            <li className="nav-item">
              <Link
                to="#Wallet"
                className="nav-link active"
                data-bs-toggle="tab"
              >
                WALLETS
              </Link>
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div className="tab-pane fade show active" id="Wallet">
              {/* <h4 className="mt-2">Women Wallet Collection</h4> */}
              <WalletCategories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
