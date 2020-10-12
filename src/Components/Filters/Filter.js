import React, { Fragment, useEffect, useState } from "react";
import {
  yearsOfLaunch,
  isSuccessFullLaunch,
  isSuccessFullLand,
} from "./launchYears";
import "./filter.css";
import { onInitialLoad } from "../../Actions";
import { useDispatch } from "react-redux";

const Filter = () => {
  const [launchYear, setLaunchYear] = useState(null);
  const [isLaunchSuccess, setLaunchSuccess] = useState(null);
  const [isLandSuccess, setLaundSuccess] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onInitialLoad(launchYear, isLaunchSuccess, isLandSuccess));
  }, [launchYear, isLaunchSuccess, isLandSuccess]);

  const addLaunchYear = (e) => {
    const year = e.target.innerHTML;
    setLaunchYear(year);
    dispatch(onInitialLoad(launchYear, isLaunchSuccess, isLandSuccess));
  };

  const isSuccessLand = (e) => {
    setLaundSuccess(e.target.value);
    dispatch(onInitialLoad(launchYear, isLaunchSuccess, isLandSuccess));
  };

  const isSuccessLaunch = (e) => {
    setLaunchSuccess(e.target.value);
    dispatch(onInitialLoad(launchYear, isLaunchSuccess, isLandSuccess));
  };

  return (
    <Fragment>
      <div className="filter-main">
        <div className="heading">Launch Year</div>
        <div>
          {yearsOfLaunch.map((years, index) => {
            const isSelected = launchYear === years.toString() && "selected";
            return (
              <div key={`launchYear${index}`} className="btn-wrap">
                <button
                  type="button"
                  className={`launch-button ${isSelected}`}
                  onClick={(e) => addLaunchYear(e)}
                >
                  {years}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <div className="heading">Successful Launch</div>
          {isSuccessFullLaunch.map((isLaunch, index) => {
            const isSelected =
              isLaunchSuccess === isLaunch.toString() && "selected";
            return (
              <div key={`launch${index}`} className="btn-wrap">
                <button
                  type="button"
                  className={`launch-button capital ${isSelected}`}
                  value={isLaunch}
                  onClick={(e) => isSuccessLaunch(e)}
                >
                  {isLaunch.toString()}
                </button>
              </div>
            );
          })}

          <div className="heading">Successful Launch</div>
          {isSuccessFullLand.map((isLand, index) => {
            const isSelected =
              isLandSuccess === isLand.toString() && "selected";
            return (
              <div key={`launch${index}`} className="btn-wrap">
                <button
                  type="button"
                  className={`launch-button capital ${isSelected}`}
                  value={isLand}
                  onClick={(e) => isSuccessLand(e)}
                >
                  {isLand.toString()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Filter;
