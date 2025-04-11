import React from "react";
import "./style.css";
import im1 from "../../im6.webp";
function Point() {
  return (
    <div className="point-container">
      <div className="point-Image">
        <img src={im1} alt="" />
      </div>
      <div className="point-content-container">
        <div className="point-content-header">Lorem ipsum</div>
        <div className="points">
          <div className="point-box-container">
            {" "}
            <div className="point-box"></div>
          </div>
          <div className="points-content-container">
            <div className="points-content-header">Lorem Ipsum</div>
            <div className="points-content-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              odit cum eaque ullam. Quibusdam nam ea fugiat, velit quaerat
              dolore culpa atque ad est facere natus illo, iusto cumque
              excepturi.
            </div>
          </div>
        </div>
        <div className="points">
          <div className="point-box-container">
            {" "}
            <div className="point-box"></div>
          </div>
          <div className="points-content-container">
            <div className="points-content-header">Lorem Ipsum</div>
            <div className="points-content-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              odit cum eaque ullam. Quibusdam nam ea fugiat, velit quaerat
              dolore culpa atque ad est facere natus illo, iusto cumque
              excepturi.
            </div>
          </div>
        </div>
        <div className="points">
          <div className="point-box-container">
            {" "}
            <div className="point-box"></div>
          </div>
          <div className="points-content-container">
            <div className="points-content-header">Lorem Ipsum</div>
            <div className="points-content-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              odit cum eaque ullam. Quibusdam nam ea fugiat, velit quaerat
              dolore culpa atque ad est facere natus illo, iusto cumque
              excepturi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Point;
