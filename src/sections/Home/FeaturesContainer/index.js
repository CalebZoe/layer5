import React from "react";

// Default imports
import Features from "../../../components/Features/index.js";
import WhiteboardingImage from "./images/whiteboarding.svg";
import WhiteboardingImageLight from "./images/whiteboarding-light.svg";
import CommentingImageDark from "./images/commenting.svg";
import CommentingImageLight from "./images/commenting-white.svg";
import AWSImage from "./images/aws.svg";
import AWSImageLight from "./images/aws-light.svg";
import AWSLogo from "./images/aws-logo.svg";
import GCPLogo from "./images/gcp-logo.svg";
// Named imports
import { Container } from "./style.js";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode.js";

// Functional component
const FeaturesContainer = () => {
  const { isDark } = useStyledDarkMode();
  const featuresInfo = [
    {
      title: "Collaborate with Precision",
      show_custom_cursor: true,
      animationOne: true,
      redirectLink: "/comments",
      desc: "Real-time collaboration for cloud and cloud native designs with live-editing, instant feedback, deploy dry runs, and secure access controls.",
      imgLink: isDark ? CommentingImageDark : CommentingImageLight,
      cursor: false
    },
    {
      title: "Generate stunning diagrams",
      show_custom_cursor: false,
      animationOne: false,
      redirectLink: "/whiteboard",
      desc: "Crafting cloud-native symphonies: Our engineering diagramming tool is your conductor's baton, turning Kubernetes infrastructure into a canvas for freestyle orchestration.",
      imgLink: isDark ? WhiteboardingImage : WhiteboardingImageLight,
      cursor: true
    },
    {
      title: "Multi-Cloud by design",
      show_custom_cursor: false,
      animationOne: true,
      redirectLink: "",
      desc: "Meshery natively supports multi-cloud credentials natively with AWS and GCP.",
      imgLink: isDark ? AWSImage : AWSImageLight,
      cursor: true,
      imageRedirectLink: true,
      redirectLinkWithImage: [
        {
          text: "AWS",
          image: AWSLogo,
          redirect: "/"
        },
        {
          text: "GCP",
          image: GCPLogo,
          redirect: "/"
        }
      ]
    },
  ];

  return (
    <>
      <Container>
        <h1 className="title">
          Deploy <i>faster </i>together with <span>Confidence</span>
        </h1>
        <p className="subtitle">
          Give your team full application visibility at every layer so the team
          can ship, refactor and onboard faster.
        </p>
        {/* Tools to help you scale your cloud native infrastructure */}
        {/* Elevate teamwork with integrated communication channels, ensuring efficient and secure project success. */}
        {/* a suite of annotation and visualization tools, allowing users to draw, annotate, and collaborate in real-time on their cloud native designs. */}

        {
          featuresInfo.map((feature) => (
            <Features
              key = {feature.title}
              title = {feature.title}
              show_custom_cursor = {feature.show_custom_cursor}
              animationOne = {feature.animationOne}
              redirectLink = {feature.redirectLink}
              desc = {feature.desc}
              imgLink = {feature.imgLink}
              cursor = {feature.cursor}
              redirectLinkWithImage = {feature.redirectLinkWithImage}
            />))
        }
      </Container>
    </>
  );
};

export default FeaturesContainer;
