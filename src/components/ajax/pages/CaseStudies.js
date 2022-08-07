import React from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import { Row, Space } from "antd";
import CustomHeader from "../components/CustomHeader";

import project1 from "../assets/images/home-decor-1.jpeg";
import project2 from "../assets/images/home-decor-2.jpeg";
import project3 from "../assets/images/home-decor-3.jpeg";
const projects = [
  {
    img: project1,
    titlesub: "Project #1",
    title: "Modern",
    disciption:
      "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    img: project2,
    titlesub: "Project #2",
    title: "Scandinavian",
    disciption:
      "Music is something that every person has his or her own specific opinion about.",  
  },
  {
    img: project3,
    titlesub: "Project #3",
    title: "Minimalist",
    disciption:
      "Different people have different taste, and various types of music, Zimbali Resort",
  },
];


function CaseStudies() {
  
  const RenderCards = ()=>{
    return projects.map((p,index)=>{
      return <CaseStudyCard p={p} index={index} key={index}/>
    })
  }

  return (
    <>
      <CustomHeader />
      <Row style={{display: "flex" , justifyContent : "center"}}>
        <RenderCards/>
      </Row>
    </>
  );
}

export default CaseStudies;
