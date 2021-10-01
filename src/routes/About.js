import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “My First React Web :)”
      </span>
      <span>이것은 라우터 동작확인을 위한 화면입니다..ㅎㅎ</span>
    </div>
  );
}

export default About;