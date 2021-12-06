import React, { useState } from "react";
import { mousepadData } from "../../../AllData/AccessoriesData";
import PopupModal from "../../Shared/PopupModal/PopupModal";

const MousepadCategories = () => {
  const [mousepads, setMousepads] = useState(mousepadData);
  return (
    <main>
      <PopupModal />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        {mousepads.map((singleMousepad) => (
          <div key={singleMousepad.id} className="col">
            <div
              className="card h-100"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                style={{ height: "250px", width: "auto" }}
                src={singleMousepad?.img}
                className="card-img-top img-fluid homeProductImage"
                alt="..."
              />
              <div className="card-body homeProductDes">
                <h5 className="card-title">Tk. {singleMousepad.price}</h5>
                <p className="card-text">
                  <p className="card-text">{singleMousepad.description}</p>
                  <p className="card-text">Color: {singleMousepad.color}</p>
                  <p className="card-text">Size: {singleMousepad.size}</p>
                </p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleMousepad.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MousepadCategories;
