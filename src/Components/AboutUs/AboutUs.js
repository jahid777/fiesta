import Aos from "aos";
import React, { useEffect } from "react";
import "./About.css";
const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <img
        className="about_banner"
        // src="https://i.imgur.com/HPIA7RP.png"
        src="https://i.imgur.com/R6izuMg.png"
        alt=""
      />
      <section className="container">
        <div className="text-description-header">
          <h2>
            <span className="first_letter">Fiesta</span>{" "}
            <span className="body_description">
              began its journey in 2019 in Tokyo, Japan. As a creation in
              leather developed by a young designer with a touch of freshness.
              Since then Fiesta is growing its business in countries apart.
            </span>
          </h2>
        </div>

        <div className="container">
          <div className="row  container main-text-div">
            <div className="col-md-6 heading-text" data-aos="fade-right">
              <h1>Designer Range of Productions:</h1>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <p>
                <span className="first_letter">Fiesta</span>{" "}
                <span className="body_description">
                  {" "}
                  offers all ranges of creative leather solutions from designer
                  bags, backpacks, laptop bags, office bags, wallet, belt,
                  sandals, shoes and lots of new things coming with each season.
                </span>
              </p>
            </div>
          </div>
          <hr className="hr_design" />

          <div className="row  container main-text-div">
            <div className="col-md-6 heading-text" data-aos="fade-right">
              <h1>Uncompromising quality: </h1>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <p>
                <span className="first_letter">All</span>{" "}
                <span className="body_description">
                  {" "}
                  our products are made of genuine and very high quality leather
                  products at most reasonable price. We also endeavour to set
                  standards for social and ethical compliance when dealing with
                  suppliers or tanneries which has given us a reputation among
                  our clients for high standard goods.
                </span>
              </p>
            </div>
          </div>
          <hr className="hr_design" />

          <div className="row  container main-text-div">
            <div className="col-md-6 heading-text" data-aos="fade-right">
              <h1>The Love hidden behind a design:</h1>
            </div>
            <div className="col-md-6 " data-aos="fade-left">
              <p>
                <span className="first_letter">Our</span>{" "}
                <span className="body_description">
                  goal is to provide innovation , designers product with
                  carefree user experience by offering products for everyday use
                  both easily and comfortably adjustable for casual and formal
                  usage with lots of functionality which put fashion at ease and
                  make your shopping affair enjoyable with us.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
