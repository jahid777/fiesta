import React from "react";
import { useState } from "react";
import PopupModal from "../../Shared/PopupModal/PopupModal";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo from "../../../Image/logo/loading.gif";

const GentsBag = () => {
  const [gents, setGents] = useState();
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
            <LazyLoadImage
              src=""
              className="card-img-top img-fluid"
              alt="..."
              placeholderSrc={logo}
            />
            <div className="card-body">
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

export default GentsBag;
