import SkillsCard from "./skillsCard";
const SkillsArray = [
  {
    id: 1,
    title: "Techniques:",
    pargraph:
      "Technical Analysist, Creative Thinking, Prioritzation, Responsive Reflecting, Qaluity Assurence",
  },
  {
    id: 2,
    title: "Tools and Frameworks:",
    pargraph:
      "NextJS, RactJS, React native, Tawlind, axios, Python, Databases (MySQL)",
  },
  {
    id: 3,
    title: "Management:",
    pargraph:
      "clear direction, decision-making, problem-solving, and the ability to motivate and manage teams effectively. ",
  },
  {
    id: 4,
    title: "Leadership:",
    pargraph:
      "keen understanding of team dynamics, strong communication,  drive change ",
  },
  {
    id: 5,
    title: "Languages:",
    pargraph: "Fluent in Arabic (native), Excellent in English (STEP score 91)",
  },
];
const Carousel = () => {
  return (
    <div className="carousel carousel-center p-4 space-x-4 rounded-box">
      {SkillsArray.map((i) => (
        <div className="carousel-item" key={i.id}>
          {SkillsCard(i.title, i.pargraph)}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
