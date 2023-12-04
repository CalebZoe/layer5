import React from "react";
import WhiteboardWrapper from "./whiteboard.style";
import { Container } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.svg";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";

let data = {
  heading: "Whiteboarding",
  sub_heading: "All-in-one markdown editor, collaborative canvas, and diagram-as-code builder",
  image: whiteboard_svg
};

let card_data = [
  {
    heading: "Choose from multiple shapes",
    subtitle: "Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.\n" +
      "Use templates to get a head start",
    image: ""
  },
  {
    heading: "Use our components and templates",
    subtitle: "Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.\n" +
      "Use templates to get a head start",
    image: ""
  },
  {
    heading: "Use our components and templates",
    subtitle: "Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.\n" +
      "Use templates to get a head start",
    image: ""
  },

];

const Whiteboard = () => {
  return (
    <WhiteboardWrapper>
      <FeatureHero data={data}/>
      <Partners />

      <Container>
        <div className={"feature-use-container"}>
          <SectionTitle className={"use-heading"}>
            <h2> Use whiteboarding for <span className={"highlighted-text"}>collaboration</span> </h2>
          </SectionTitle>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} sm={12} md={6} lg={4}/>
            ))}
          </div>
        </div>
      </Container>
      <SeeYou/>
    </WhiteboardWrapper>
  );
};

export default Whiteboard;