import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shoesData } from "../../../AllData/AllData";
import { bagsData } from "../../../AllData/AllData";
import { beltsData } from "../../../AllData/AllData";
import { anotherBagsData } from "../../../AllData/AllData";
import { walletsData } from "../../../AllData/AllData";
import AOS from "aos";
import "aos/dist/aos.css";

const Bag = () => {
  const [shoes, setShoes] = useState(shoesData);
  const [bags, setBags] = useState(bagsData);
  const [belts, setBelts] = useState(beltsData);
  const [anotherBagData, setAnotherBagData] = useState(anotherBagsData);
  const [wallets, setWallets] = useState(walletsData);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="mb-5 mt-2">
      {/* this is for shoes */}
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid mt-2">
        {shoes.map((singleShoes) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={singleShoes?.img}
                className="card-img-top img-fluid"
                alt="..."
                data-aos="fade-up"
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
      {/* this is for bag */}
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid mt-5">
        {bags.map((singleBag) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={singleBag?.img}
                className="card-img-top img-fluid"
                alt="..."
                data-aos="fade-up"
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
      {/* this is for belt */}
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid mt-5">
        {belts.map((singleBelt) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={singleBelt?.img}
                className="card-img-top img-fluid"
                alt="..."
                data-aos="fade-up"
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
      {/* another product(laptop, office) */}
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid mt-5">
        {anotherBagData.map((singleBag) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={singleBag?.img}
                className="card-img-top img-fluid"
                alt="..."
                data-aos="fade-up"
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

      {/* this is for wallet */}
      <div className="row row-cols-1 row-cols-md-4 g-4 container-fluid mt-5">
        {wallets.map((singleWallet) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={singleWallet?.img}
                className="card-img-top img-fluid"
                alt="..."
                data-aos="fade-up"
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

export default Bag;