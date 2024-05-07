/* eslint-disable react/prop-types */
import styled from "styled-components";
import ArrowRight from "../assets/arrow-right.svg?react";
import Heading from "../Components/Heading";

export default function Project({ project, index }) {
  return (
    <Wrapper className={index % 2 == 0 ? "left" : "right"}>
      <div className="img-box">
        <img src={project.image} alt={project.name} className="img" />
      </div>
      <div className="text-box">
        <Heading type="h2" className="capitalize">
          {project.name}
        </Heading>
        <a
          href={project.live_link || project.github}
          className="link"
          target="_blank"
        >
          {project.live_link ? "Live view" : "github"}
          <div className="arrow-box">
            <ArrowRight className="icon" />
          </div>
        </a>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .img-box {
    height: auto;
    max-width: 100%;
    .img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      transition: all 0.3s ease;
    }
  }

  .text-box {
    position: relative;
    height: 100%;
    padding: 2rem;

    .link {
      font-size: clamp(1.5rem, 2vmax, 2rem);
      text-transform: capitalize;
      color: var(--dark);
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      font-family: var(--font-body);

      .arrow-box {
        height: 3rem;
        width: 3rem;
        border: 1px solid var(--dark);
        border-radius: 50%;
        margin-left: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
      }

      .icon {
        height: 1.6rem;
        width: 1.6rem;
        fill: var(--dark);
      }
    }
  }

  &:hover {
      .img {
        filter: brightness(0.6);
        transform: scale(0.99);
      }
      
      .arrow-box {
        transform: translateX(0.5rem);
      }
    }
`;
