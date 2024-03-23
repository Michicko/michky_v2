import styled from "styled-components";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList() {
  const experiences = [
    {
      company: "Sifasec",
      role: "Fullstack Web Developer",
      location: "USA",
      link: "https://www.sifasec.com",
      from: "June 2023",
      to: "September 2023",
      services: [
        "Demonstrated extensive knowledge of the company’s business plan to achieve the company’s organizational goals and initiatives.",
        "Developed, deployed, and maintained the comapany's website.",
      ],
    },
    {
      company: "Tcciwc",
      role: "Fullstack Web Developer",
      location: "Nigeria",
      link: "https://tcciwc.org",
      from: "September 2023",
      to: "January 2024",
      services: [
        "Achieve the company’s goals and initiatives.",
        "Developed, deployed, and maintained the comapany's website.",
      ],
    },
    {
      company: "Uhhp",
      role: "Fullstack Web Developer",
      location: "USA",
      link: "https://ultimatehomehealthcareproviders.com",
      from: "January 2024",
      to: "March 2024",
      services: [
        "Achieve the company’s goals and initiatives.",
        "Developed, deployed, and maintained the comapany's website.",
      ],
    },
    {
      company: "kellexschools",
      role: "Fullstack Web Developer",
      location: "Nigeria",
      link: "https://kellexschools.com",
      from: "August 2023",
      to: "Present",
      services: [
        "Developed, deployed, and maintained the school website.",
        "Developed and maintained the school portal, providing information to parents and supporting student success.",
        "working to give the school an online presence.",
      ],
    },
    {
      company: "Upwork",
      role: "Frontend Developer",
      location: "USA",
      link: "https://upwork.com",
      from: "January 2024",
      to: "Present",
      services: [
        "Developing websites for businesses and companies.",
        "Fixing bugs, and solving problems for happy clients.",
        "Improving user experience on applications for interested clients.",
      ],
    },
  ];

  const list = experiences.map((exp, i) => {
    return <ExperienceCard experience={exp} key={i} />;
  });

  return <Wrapper>{list}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
