import React from "react";
import PopupModal from "../../Shared/PopupModal/PopupModal";

const GiftCategories = () => {
  return (
    <main>
      <PopupModal />
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid">
        <div className="col">
          <div
            className="card h-100"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img src="" className="card-img-top img-fluid" alt="..." />
            <div className="card-body homeProductDes">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GiftCategories;
