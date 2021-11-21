import React, { useState } from "react";
import { menShoes } from "../../../AllData/ShoesData";
import MenPopModal from "../../Shared/PopupModal/MenPopModal";
import PopupModal from "../../Shared/PopupModal/PopupModal";

const MenShoeCategories = () => {
  const [mensShoes, setMenShoe] = useState(menShoes);
  return (
    <main className="container-fluid">
      <MenPopModal />
      <h3>Mens Shoe Collections</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {menShoes.map((singleMensShoe) => (
          <div key={singleMensShoe.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#menModal"
            >
              <img
                // style={{ height: "300px", width: "100%" }}
                src={singleMensShoe.img}
                className="card-img-top img-fluid"
                alt="..."
                style={{ height: "250px", width: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Tk. {singleMensShoe.price}</h5>
                <p className="card-text">{singleMensShoe.description}</p>
                <p className="card-text">Color: {singleMensShoe.color}</p>
                <p className="card-text">Size: {singleMensShoe.size}</p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleMensShoe.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MenShoeCategories;
