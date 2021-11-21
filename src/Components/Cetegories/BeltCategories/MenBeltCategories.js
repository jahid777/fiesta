import React, { useState } from "react";
import { menBelt } from "../../../AllData/BeltData";
import MenPopModal from "../../Shared/PopupModal/MenPopModal";

const MenBeltCategories = () => {
  const [mensBelt, setMensbelt] = useState(menBelt);
  return (
    <main>
      <MenPopModal />
      <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
        {mensBelt.map((singleMensBelt) => (
          <div key={singleMensBelt.id} className="col">
            <div
              className="card h-100"
              data-bs-toggle="modal"
              data-bs-target="#menModal"
            >
              <img
                style={{ height: "250px", width: "auto" }}
                src={singleMensBelt.img}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tk. {singleMensBelt.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleMensBelt.description}</p>
                  <p className="card-text">Color: {singleMensBelt.color}</p>
                  <p className="card-text">Size: {singleMensBelt.size}</p>
                </p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleMensBelt.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MenBeltCategories;
