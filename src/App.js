//General imports
import React from "react";
//Axios
import axios from "axios";
//States
import { useEffect, useState } from "react";
//Styled components
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import downArrow from "./img/down-arrow.png";
import MoreInfo from "./components/MoreInfo";

function App() {
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState("");
  const [time, setTime] = useState();
  const [sec, setSec] = useState();
  const [greeting, setGreeting] = useState();
  const [more, setMore] = useState(true);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=3a0cd6aef1f24a3ea24100920211011&q=giza`
      )
      .then((res) => setWeather(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const inputValue = (e) => {
    setSearch(e.target.value);
  };
  const searchCountry = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=3a0cd6aef1f24a3ea24100920211011&q=${search}`
      )
      .then((res) => setWeather(res.data))
      .then(() => {
        //Get the whole time
        let TwentyFourHour = weather.location.localtime.slice(11, -3);
        //Get the hours
        let hour = weather.location.localtime;
        hour = hour.slice(10, -3);
        //Get the mins
        let min = weather.location.localtime;
        min = min.substr(min.length - 5).slice(-2);
        //Get sec
        let mid = "PM";
        if (hour > 12) {
          hour = hour - 12;
        }
        if (hour === 0) {
          hour = 12;
        }
        if (TwentyFourHour < 12) {
          mid = "AM";
        }
        if (mid === "AM") {
          setGreeting("GOOD MORNING");
        } else {
          setGreeting("GOOD EVENING");
        }
        setTime(hour + ":" + min);
        setSec(mid);
      });
  };
  let up = {
    transfrom: "translateY(0)",
  };
  let rot = {
    transform: "rotate(0deg)",
  };
  if (!more) {
    up = {
      transform: "translateY(-55%)",
    };
    rot = {
      transform: "rotate(180deg)",
    };
  }

  return (
    <>
      {weather && (
        <StyledContainer>
          <GlobalStyles />
          <StyledContent style={up}>
            <StyledQuote>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt vel ducimus minima ratione voluptatibus voluptatem iure
                consequuntur animi cum. Magni autem explicabo ipsam veritatis
                nisi fuga eveniet cupiditate dolore mollitia?
              </p>
              <h3>Lorem, ipsum.</h3>
            </StyledQuote>

            <div>
              <input onChange={inputValue} type="text" />
              <button onClick={searchCountry}>Submit</button>
            </div>

            <StyledData>
              <StyledDataContent>
                <StyledGreetings>
                  <img src={weather.current.condition.icon} alt="condition" />
                  <p>{greeting}, IT'S CURRENTLY</p>
                </StyledGreetings>
                <StyledTime>
                  <span className="hour">{time}</span>
                  <span>{sec}</span>
                </StyledTime>
                <h1>
                  In {weather.location.name}, {weather.location.country}
                </h1>
              </StyledDataContent>
              <button className="toggle" onClick={() => setMore(!more)}>
                MORE <img style={rot} src={downArrow} alt="toggle-arrow" />
              </button>
            </StyledData>
          </StyledContent>
          <MoreInfo more={more} weather={weather} />
        </StyledContainer>
      )}
    </>
  );
}

//Styles
const StyledContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 3rem;
  @media (max-width: 770px) {
    padding: 1rem;
  }
`;

const StyledContent = styled.div`
  min-height: 80vh;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  position: relative;
  transition: all 0.5s ease;
  @media (max-width: 770px) {
    width: 100%;
  }
  .toggle {
    border: none;
    background-color: white;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-out;
    @media (max-width: 770px) {
      margin-top: 1rem;
      position: relative;
      z-index: 20;
    }
    &:hover {
      background-color: #1d1d1d;
      color: white;
      cursor: pointer;
      img {
        background-color: #818181;
        transition: all 0.5s ease;
      }
    }
    img {
      background-color: #1d1d1d;
      padding: 0.5rem;
      border-radius: 100px;
      width: 35%;
      margin-left: 1rem;
    }
  }
`;

const StyledGreetings = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: -1.2rem;
`;

const StyledDataContent = styled.div``;

const StyledTime = styled.div`
  .hour {
    font-size: 12rem;
    font-weight: 500;
  }
`;

const StyledQuote = styled.div`
  width: 50%;
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  @media (max-width: 770px) {
    width: 80%;
  }
`;
const StyledData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`;
export default App;
