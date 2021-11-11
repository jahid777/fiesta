import React from "react";
import { Link } from "react-router-dom";
import MenWalletCategories from "../../Cetegories/WalletCategories/MenWalletCategories";
import WomenWalletCategories from "../../Cetegories/WalletCategories/WomenWalletCategories";

const Wallet = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "350px", width: "100%" }}
          src="https://www.saaexclusive.com/wp-content/uploads/2020/03/Banner_SAA-1410x728.jpg"
          alt=""
        />
      </div>
      <div className="container-fluid">
        <div className="m-4">
          <ul className="nav nav-tabs" id="myTab">
            <li className="nav-item">
              <Link
                to="#womenWallet"
                className="nav-link active"
                data-bs-toggle="tab"
              >
                WOMEN WALLET
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#menWallet" className="nav-link" data-bs-toggle="tab">
                MEN WALLET
              </Link>
            </li>
          </ul>
          <div className="tab-content mt-5">
            <div className="tab-pane fade show active" id="womenWallet">
              {/* <h4 className="mt-2">Women Wallet Collection</h4> */}
              <WomenWalletCategories />
            </div>
            <div className="tab-pane fade" id="menWallet">
              {/* <h4 className="mt-2">Men Wallet Collection</h4> */}
              <MenWalletCategories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
