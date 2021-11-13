import React from "react";

const MenPopModal = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="menModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                CONTACT US
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5>
                <div syle={{ display: "flex" }}>
                  <i class="bi bi-telephone-outbound-fill"></i>{" "}
                  <span style={{ marginLeft: "5px" }} className="pr-4">
                    012200000000
                  </span>
                </div>
              </h5>
              <h5>
                <div syle={{ display: "flex" }}>
                  <i class="bi bi-envelope-fill"></i>
                  <span style={{ marginLeft: "10px" }}>Example@gmail.com</span>
                </div>
              </h5>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
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

export default MenPopModal;
