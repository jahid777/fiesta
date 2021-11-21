import React, { useState } from "react";
import { womenShoes } from "../../../AllData/ShoesData";
import PopupModal from "../../Shared/PopupModal/PopupModal";

const WomenShoeCategories = () => {
  const [womensShoe, setWomenShoe] = useState(womenShoes);
  return (
    <main className="container-fluid">
      <PopupModal />
      <h3>Womens Shoe Collections</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {womensShoe.map((singleWomensShoe) => (
          <div key={singleWomensShoe.id} className="col">
            <div
              className="card h-100 cardBody"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img
                // style={{ height: "300px", width: "100%" }}
                src={singleWomensShoe.img}
                className="card-img-top img-fluid"
                alt="..."
                style={{ height: "250px", width: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">Tk. {singleWomensShoe.price}</h5>
                <p className="card-text">{singleWomensShoe.description}</p>
                <p className="card-text">Color: {singleWomensShoe.color}</p>
                <p className="card-text">Size: {singleWomensShoe.size}</p>
              </div>
              <div className="card-footer ProductModelNumber">
                <small>{singleWomensShoe.ProductCode}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WomenShoeCategories;
