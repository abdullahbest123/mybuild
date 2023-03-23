import React from "react";

const TopHeading = "MEET OUR TEAM";

const FirstPerson = {
  img: "abdullah.jpg",
  title: "Muhammad Abdullah",
  post: "Full Stack Developer",
  link: "abdullahadil@gmail.com",
};

const SecondPerson = {
  img: "abdullahkhizer.jpg",
  title: "Abdullah Khizer",
  post: "Web Developer",
  link: "abdullahkhizer@gmail.com",
};

const ThirdPerson = {
  img: "haris.jpg",
  title: "Haris Ali",
  post: "UI/UX Designer",
  link: "harisali@gmail.com",
};

function Section_one() {
  return (
    <section class="team-section">
      <h1 className="Top-Heading">{TopHeading}</h1>
      <div class="team-people">
        <Card
          img={FirstPerson.img}
          title={FirstPerson.title}
          post={FirstPerson.post}
          link={FirstPerson.link}
        />
        <Card
          img={SecondPerson.img}
          title={SecondPerson.title}
          post={SecondPerson.post}
          link={SecondPerson.link}
        />

        <Card
          img={ThirdPerson.img}
          title={ThirdPerson.title}
          post={ThirdPerson.post}
          link={ThirdPerson.link}
        />
      </div>
    </section>
  );
}

const Card = (props) => {
  return (
    <div className="teamCard">
      <div className="cardImg">
        <img src={props.img} alt="rqwrqr" width="270px"></img>
      </div>
      <div className="cardbody">
        <h1 className="cardTitle">{props.title}</h1>
        <h4 className="cardpost">{props.post}</h4>
        <a className="cardlink" href="#">
          {props.link}
        </a>
      </div>
    </div>
  );
};

export default Section_one;
