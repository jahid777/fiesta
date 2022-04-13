import React, { useState } from "react";
import { WalletBoth } from "../../../AllData/Wallet";
import PopupModal from "../../Shared/PopupModal/PopupModal";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";

const WalletCategories = () => {
  const [Wallets, setWallets] = useState(WalletBoth);
  return (
    <main>
      <PopupModal />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {Wallets.map((singleWallet) => (
          <div key={singleWallet?.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <LazyLoadImage
                style={{ height: "250px" }}
                src={singleWallet?.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
                placeholderSrc={logo}
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleWallet?.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleWallet?.description}</p>
                  <p className="card-text">Color: {singleWallet?.color}</p>
                </p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleWallet?.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WalletCategories;
