import './App.css';
import React, { useState } from "react";
import Header from './Components/Header';
import Card from './Components/Card';
import images1 from './assets/Germany.png';
import images2 from './assets/unitedstates.png';
import images3 from './assets/brazil.png';
import images4 from './assets/iceland.png';
import images5 from './assets/download2.jpg';
import images6 from './assets/Aland.png';
import images7 from './assets/albania.png';
import images8 from './assets/algeria.png';

function App() {
  const [colors, setColors] = useState({
    bgColor: "#2c3e50",
    fontColor: "white",
  });

  const toggleColors = () => {
    setColors((prevColors) => ({
      bgColor: prevColors.bgColor === "#2c3e50" ? "white" : "#2c3e50",
      fontColor: prevColors.fontColor === "white" ? "black" : "white",
    }));
  };

  return (
    <div
      style={{
        backgroundColor: colors.bgColor,
        color: colors.fontColor, // Dynamic font color
        height: "350vh",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      <Header onToggleMode={toggleColors} />
      <div className='App'>
        <Card
          title="Germany"
          imageurl={images1}
          population="81,770,900"
          region="Europe"
          capital="Berlin"
        />
        <Card
          title="United States"
          imageurl={images2}
          population="323,947,000"
          region="Americas"
          capital="Washington, D.c."
        />
        <Card
          title="Brazil"
          imageurl={images3}
          population="206,135,893"
          region="Americas"
          capital="Brasilia"
        />
        <Card
          title="Iceland"
          imageurl={images4}
          population="334,300"
          region="Europe"
          capital="Reykjavik"
        />
        <Card
          title="Afghanistan"
          imageurl={images5}
          population="27,657,145"
          region="Asia"
          capital="Kabul"
        />
        <Card
          title="Aland Islands"
          imageurl={images6}
          population="28,875"
          region="Europe"
          capital="Mariehamn"
        />
        <Card
          title="Albania"
          imageurl={images7}
          population="2,886,026"
          region="Europe"
          capital="Tirana"
        />
        <Card
          title="Algeria"
          imageurl={images8}
          population="40,400,000"
          region="Africa"
          capital="Algiers"
        />
      </div>
    </div>
  );
}

export default App;
