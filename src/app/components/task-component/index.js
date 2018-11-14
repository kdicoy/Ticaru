import React from "react";
import ParticleEffectButton from "react-particle-effect-button";
//import styled, { animate } from 'styled-components'

const TaskComponent = ({ item, resolveItem, day }) => {
  return (
    <ParticleEffectButton
      color="#121019"
      hidden={item.resolved}
      className="particle-effect-size"
    >
      <div
        style={{
          display: "flex",
          alignContent: "row",
          justifyContent: "space-between",
          height: "20px",
          userSelect: "none",
          borderRadius: "5px",
          width: "calc(50vw - 20px)",
          padding: 10,
          backgroundColor: "lightblue"
        }}
      >
        <div>{item.content}</div>
        <button
          className="resolve-circle-button"
          onClick={resolveItem(item.id, day)}
        >
          <i className="ion-ios-arrow-down" />
        </button>
      </div>
    </ParticleEffectButton>
  );
};

export default TaskComponent;
