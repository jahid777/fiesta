import React, { useState } from "react";
import { officeBag } from "../../../AllData/BagData";
import OfficeBagPopup from "../../Shared/PopupModal/OfficeBagPopup";

const OfficeBag = () => {
  const [officeBags, setOffice] = useState(officeBag);
  return (
    <main>
      <OfficeBagPopup />
      <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid">
        {officeBags.map((singleOfficeBag) => (
          <div key={singleOfficeBag.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#officeModal"
            >
              <img
                style={{ height: "250px", width: "auto" }}
                src={singleOfficeBag.img}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Tk. {singleOfficeBag.price}</h5>
                <p className="card-text">{singleOfficeBag.description}</p>
                <p className="card-text">Color: {singleOfficeBag.color}</p>
                <p className="card-text">Size: {singleOfficeBag.size}</p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleOfficeBag.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default OfficeBag;
