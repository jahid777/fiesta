import React, { useState } from "react";
import { womenWallet } from "../../../AllData/Wallet";
import PopupModal from "../../Shared/PopupModal/PopupModal";

const WomenWalletCategories = () => {
  const [womenWallets, setWomenWallets] = useState(womenWallet);
  return (
    <main>
      <PopupModal />
      <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
        {womenWallets.map((singleWomenWallet) => (
          <div key={singleWomenWallet.id} className="col">
            <div
              className="card h-100"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                style={{ height: "250px", width: "auto" }}
                src={singleWomenWallet?.img}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tk. {singleWomenWallet.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleWomenWallet.description}</p>
                  <p className="card-text">Color: {singleWomenWallet.color}</p>
                  <p className="card-text">Size: {singleWomenWallet.size}</p>
                </p>
              </div>
              <div className="card-footer">
                <small>{singleWomenWallet.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WomenWalletCategories;
