import React from "react";
import "./popupModal.css";

const PopupModal = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header popupBody">
              <h5 className="modal-title" id="exampleModalLabel">
                CONTACT US
              </h5>
              {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div className="modal-body">
              <h5>
                <div syle={{ display: "flex" }}>
                  <i className="bi bi-telephone-outbound-fill"></i>{" "}
                  <span style={{ marginLeft: "5px" }} className="pr-4">
                    +8801841477361
                  </span>
                </div>
              </h5>
              <h5>
                <div syle={{ display: "flex" }}>
                  <i className="bi bi-envelope-fill"></i>
                  <span style={{ marginLeft: "10px" }}>
                    admin@fiestalifestyle.com
                  </span>
                </div>
              </h5>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-secondary close-btn-popup"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
