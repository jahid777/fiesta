import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shoesData } from "../../../AllData/AllData";
import { bagsData } from "../../../AllData/AllData";
import { beltsData } from "../../../AllData/AllData";
// import { accessoriesData } from "../../../AllData/AllData";
import { walletsData } from "../../../AllData/AllData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeComp.css";
import PopupModal from "../../Shared/PopupModal/PopupModal";
import { accessoriesData } from "./../../../AllData/AllData";

const Bag = () => {
  const [shoes, setShoes] = useState(shoesData);
  const [bags, setBags] = useState(bagsData);
  const [belts, setBelts] = useState(beltsData);
  const [AccessoriesData, setAccessoriesData] = useState(accessoriesData);
  const [wallets, setWallets] = useState(walletsData);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main>
      <PopupModal />
      <div className="container-fluid mt-5 mb-5 px-5">
        {/* this is for shoes */}
        <div className="d-flex bd-highlight homeProductHead">
          <div className="me-auto bd-highlight">
            <h3>Shoe Items</h3>
          </div>
          <div className="bd-highlight Viewall">
            <Link to="/shoe" className="btn">
              View All
            </Link>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
          {shoes.map((singleShoes) => (
            <div key={singleShoes.id} className="col">
              <div
                className="card h-100 cardBody"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={singleShoes?.img}
                  className="card-img-top img-fluid"
                  alt="..."
                  data-aos="fade-up"
                />
                <div className="card-body">
                  <h5 className="card-title ProductPrice">
                    TK. {singleShoes.price}
                  </h5>

                  <p className="card-text ProductDescription">
                    {singleShoes.description}
                  </p>
                  <p className="card-text ProductDescription">
                    Color: {singleShoes.color}
                  </p>
                  <p className="card-text ProductDescription">
                    Size: {singleShoes.size}
                  </p>
                </div>
                <div className="card-footer ProductModelNumber">
                  <small>Model No : BSS-104</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* this is for bag */}
        <div className="d-flex bd-highlight homeProductHead mt-5">
          <div className="me-auto bd-highlight">
            <h3>Bag Items</h3>
          </div>
          <div className="bd-highlight Viewall">
            <Link to="/bag" className="btn">
              View All
            </Link>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
          {bags.map((singleBag) => (
            <div key={singleBag.id} className="col">
              <div
                className="card h-100 cardBody"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={singleBag?.img}
                  className="card-img-top img-fluid"
                  alt="..."
                  data-aos="fade-up"
                />
                <div className="card-body">
                  <h5 className="card-title ProductPrice">
                    Tk. {singleBag.price}
                  </h5>
                  <p className="card-text ProductDescription">
                    {singleBag.description}
                  </p>
                  <p className="card-text ProductDescription">
                    Color: {singleBag.color}
                  </p>
                  <p className="card-text ProductDescription">
                    Size: {singleBag.size}
                  </p>
                </div>
                <div className="card-footer ProductModelNumber">
                  <small>{singleBag.productCode}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* this is for belt */}
        <div className="d-flex bd-highlight homeProductHead mt-5">
          <div className="me-auto bd-highlight">
            <h3>Belt Items</h3>
          </div>
          <div className="bd-highlight Viewall">
            <Link to="/belt" className="btn">
              View All
            </Link>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
          {belts.map((singleBelt) => (
            <div key={singleBelt.id} className="col">
              <div
                className="card h-100 cardBody"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={singleBelt?.img}
                  className="card-img-top img-fluid"
                  alt="..."
                  data-aos="fade-up"
                />
                <div className="card-body">
                  <h5 className="card-title"> Tk. {singleBelt?.price}</h5>
                  <p className="card-text">{singleBelt?.description}</p>
                  <p className="card-text ProductDescription">
                    Color: {singleBelt.color}
                  </p>
                </div>
                <div className="card-footer ProductModelNumber">
                  <small>{singleBelt.productCode}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* this is for wallet */}
        <div className="d-flex bd-highlight homeProductHead mt-5">
          <div className="me-auto bd-highlight">
            <h3>Wallet Items</h3>
          </div>
          <div className="bd-highlight Viewall">
            <Link to="/wallet" className="btn">
              View All
            </Link>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
          {wallets.map((singleWallet) => (
            <div key={singleWallet.id} className="col">
              <div
                className="card h-100 cardBody"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={singleWallet?.img}
                  className="card-img-top img-fluid"
                  alt="..."
                  data-aos="fade-up"
                />
                <div className="card-body">
                  <h5 className="card-title">Tk. {singleWallet?.price}</h5>
                  <p className="card-text">{singleWallet?.description}</p>
                  <p className="card-text ProductDescription">
                    Color: {singleWallet.color}
                  </p>
                </div>
                <div className="card-footer ProductModelNumber">
                  <small>{singleWallet.productCode}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* end Wallet */}
        {/* another product(laptop, office) */}
        <div className="d-flex bd-highlight homeProductHead mt-5">
          <div className="me-auto bd-highlight">
            <h3>Accessories Items</h3>
          </div>
          <div className="bd-highlight Viewall">
            <Link to="/accessories" className="btn">
              View All
            </Link>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
          {AccessoriesData.map((singleAccessories) => (
            <div className="col">
              <div
                className="card h-100 cardBody"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={singleAccessories?.img}
                  className="card-img-top img-fluid"
                  alt="..."
                  data-aos="fade-up"
                />
                <div className="card-body">
                  <h5 className="card-title">Tk. {singleAccessories?.price}</h5>
                  <p className="card-text">{singleAccessories?.description}</p>
                  <p className="card-text">Color: {singleAccessories?.color}</p>
                </div>
                <div className="card-footer ProductModelNumber">
                  <small>{singleAccessories?.productCode}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Bag;
