/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function ExperienceCard({ experience }) {
  return (
    <Wrapper>
      <a href={experience.link} className="link" target='_blank' rel="noopener">
        {experience.company}, <span className="sm">{experience.location}</span>
      </a>
      <p>
        {experience.role},{" "}
        <span className="sm">
          {experience.from} - {experience.to}
        </span>
      </p>
      <ul>
        {experience.services.map((el, i) => {
          return (
            <li className="service" key={i + 1 * 2}>
              {el}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding-left: 3rem;
  border-left: 1px dashed #edae0e;
  padding-bottom: 4rem;

  &::before {
    position: absolute;
    top: 0;
    left: -.8rem;
    background: var(--darker);
    border: 3px solid #777;
    display: block;
    content: "";
    /* height: 1.5rem; */
    /* width: 1.5rem; */
    padding: 0.5rem;
    border-radius: 50%;
  }

  .sm {
    font-weight: 400;
    color: #8697a8;
    font-size: 1.4rem;
  }

  .link,
  p {
    font-size: var(--base-text);
    font-weight: 500;
    color: var(--dark);
  }

  .link {
    text-decoration: none;
    display: inline-block;
    margin-bottom: 1rem;
    /* font-weight: 500; */
    border-bottom: 1px solid transparent;

    &:hover{
      border-color: var(--dark);
    }
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  
  }

  ul {
    padding-left: 2rem;

    &>*:not(:last-child){
        margin-bottom: .6rem;
    }
  }

  li{
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--dark);
    max-width: 60rem;
  }
`;
