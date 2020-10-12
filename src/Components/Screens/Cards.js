import React from "react";
import { useSelector } from "react-redux";
import "./cards.css";

const Cards = () => {
  const state = useSelector((state) => state);
  const list = state.response;
  return (
    <>
      <div className="main">
        <ul className="cards">
          {list?.map((data, index) => {
            const missonId = data.mission_id[0] || "Not FOund";
            const landingSuccess =
              data.rocket.first_stage?.cores[0]?.land_success || "Not Found";
            return (
              <li className="cards_item" key={`launch${index}`}>
                <div className="card">
                  <div className="card_image">
                    <img src={data.links.mission_patch_small} />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">FalconSat #{index}</h2>
                    <p className="card_text">
                      <span className="missonId">MissionIds: </span>{" "}
                      <span>{missonId}</span>
                    </p>
                    <p className="card_text">
                      <span className="missonId">Launch Year: </span>{" "}
                      <span>{data.launch_year}</span>
                    </p>
                    <p className="card_text">
                      <span className="missonId">Successful Launch: </span>{" "}
                      <span>{data.launch_success?.toString()}</span>
                    </p>
                    <p className="card_text">
                      <span className="missonId">Successful Landing: </span>{" "}
                      <span>{landingSuccess.toString()}</span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Cards;
