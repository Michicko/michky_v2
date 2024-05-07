import styled from "styled-components";
import Header from "../Components/Header";
import Project from "../Components/Project";
import Text from "../Components/Text";
import Seo from "../Components/Seo";

export default function Home() {
  const projects = [
    {
      id: 1,
      name: "Total care concern for women and children",
      image: "/tcciwc.png",
      description: "A landing page for a web developer",
      live_link: "https://tcciwc.org/",
      github: "",
    },
    {
      id: 2,
      name: "sifasec",
      image: "/sifasec.png",
      description: "A landing page for a web developer 2",
      live_link: "https://sifasec.com",
      github: "",
    },
    {
      id: 3,
      name: "ultimate home healthcare providers",
      image: "/ultimatehome.png",
      description: "A landing page for a web developer 3",
      live_link: "https://ultimatehomehealthcareproviders.com/",
      github: "",
    },
    {
      id: 4,
      name: "Kellex Schools",
      image: "/kellexschools.png",
      description: "A landing page for a web developer 3",
      live_link: "https://kellexschools.com/",
      github: "",
    },
  ];
  return (
    <>
    <Seo title={'Software developer | Software Engineer | Web developer'} siteName={'Michael Otaigbe (Solomon)'} description={'Software developer | Software Engineer | Web developer | Web designer'} />
      <Header />
      <Main>
        <div className="projects">
          {projects.map((project, i) => {
            return <Project key={project.id} project={project} index={i} />;
          })}
        </div>
        <div className="cta">
          <h2>
            <span>Interested in working</span>
            <span>together on a project?</span>
          </h2>
          <Text center={true}>
            Feel free to contact me for any project or collaborations.
          </Text>
        </div>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 5rem 8rem;
  margin-bottom: 8rem;

  .projects {
    margin-bottom: 5rem;
    & > *:not(:last-child) {
      margin-bottom: 6rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 6rem;
  }

  @media only screen and (max-width: 992px) {
    padding: 0 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: 576px) {
  }

  .cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

    h2 {
      font-size: clamp(3rem, 5vmax, 5rem);
      line-height: 1.2;
      font-family: var(--font-heading);
      color: var(--darker);
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-weight: 500;
    }
  }
`;
