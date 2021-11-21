import React from "react";
import { useState } from "react";
import { menWallet } from "../../../AllData/Wallet";
import MenPopModal from "../../Shared/PopupModal/MenPopModal";

const MenWalletCategories = () => {
  const [menWallets, setMenWallets] = useState(menWallet);
  return (
    <main>
      <MenPopModal />
      <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
        {menWallets.map((singleMenWallet) => (
          <div key={singleMenWallet.id} className="col">
            <div
              className="card h-100"
              data-bs-toggle="modal"
              data-bs-target="#menModal"
            >
              <img
                style={{ height: "250px", width: "auto" }}
                src={singleMenWallet.img}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tk. {singleMenWallet.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleMenWallet.description}</p>
                  <p className="card-text">Color: {singleMenWallet.color}</p>
                  <p className="card-text">Size: {singleMenWallet.size}</p>
                </p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleMenWallet.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MenWalletCategories;
