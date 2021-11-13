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
          <div className="col">
            <div
              className="card h-100"
              data-bs-toggle="modal"
              data-bs-target="#menModal"
            >
              <img
                // style={{ height: "300px", width: "100%" }}
                src={singleMensBelt.img}
                className="card-img-top img-fluid"
                alt="..."
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
        ))}
      </div>
    </main>
  );
};

export default MenBeltCategories;
