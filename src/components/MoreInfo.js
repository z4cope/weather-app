import React from "react";
import styled from "styled-components";

const MoreInfo = ({ more, weather }) => {
  let out = {
    transform: "translateY(0)",
  };
  if (more) {
    out = {
      transform: "translateY(100%)",
    };
  }
  return (
    <StyledMore style={out}>
      <StyledLeft>
        <div>
          <h3>Current Region</h3>
          <h2>{weather.location.tz_id}</h2>
        </div>
        <div>
          <h3>Humidity</h3>
          <h2>{weather.current.humidity}</h2>
        </div>
      </StyledLeft>
      <StyledRight>
        <div>
          <h3>Temperature</h3>
          <h2>{weather.current.temp_c}</h2>
        </div>
        <div>
          <h3>Wind direction</h3>
          <h2>{weather.current.wind_dir}</h2>
        </div>
      </StyledRight>
    </StyledMore>
  );
};

const StyledMore = styled.div`
  position: fixed;
  height: 50%;
  width: 100%;
  background-color: #e7e7e7bc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
  @media (max-width: 540px) {
    height: 90%;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

const StyledRight = styled.div`
  flex: 1;
  min-height: 40vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 5rem;
  border-left: 2px solid #ccc;
  text-align: left;
  h3 {
    font-weight: 100;
  }
  h2 {
    font-size: 3rem;
  }
  @media (max-width: 540px) {
    border: none;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    text-align: center;
  }
`;

const StyledLeft = styled(StyledRight)`
  border: none;
  @media (max-width: 540px) {
    border-bottom: 2px solid #ccc;
  }
`;

export default MoreInfo;
