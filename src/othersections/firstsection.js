import React from 'react';

const TopHeading = "MEET OUR TEAM"

const FirstPerson = {
  img : "https://micdropagency.com/media/pages/home/4c09f36417-1655934960/img-0289-edit-800x.jpg",
  title : "Michael Zaccardo",
  post : "Vice President of Sports Partnerships",
  link : "michael@micdropagency.com",
}

const SecondPerson = {
  img : "https://micdropagency.com/media/pages/home/e451464db8-1655934960/img-0347-edit-800x.jpg",
  title : "Jimmy Sampey",
  post : "Vice President of Entertainment Partnerships",
  link : "jimmy@micdropagency.com",
}

const ThirdPerson = {
  img : "https://micdropagency.com/media/pages/home/d144db4404-1655934959/dave-skux-800x.jpg",
  title : "Dave Chidekel",
  post : "Co-Founder & CEO",
  link : "dave@micdropagency.com",
}


function Section_one() {
  return (
    <section class="team-section">
      <h1 className="Top-Heading">{TopHeading}</h1>
      <div class="team-people">
        <Card 
      img = {FirstPerson.img}
      title = {FirstPerson.title}
      post = {FirstPerson.post}
      link = {FirstPerson.link}

      />
      <Card 
      img = {SecondPerson.img}
      title = {SecondPerson.title}
      post = {SecondPerson.post}
      link = {SecondPerson.link}
      />

      <Card 
      img = {ThirdPerson.img}
      title = {ThirdPerson.title}
      post = {ThirdPerson.post}
      link = {ThirdPerson.link}
      />
      </div>
      
    </section>
  );
}

const Card = (props) => {
return(
  <div className="teamCard">
    <div className="cardImg" style={{
       backgroundImage: `url(${props.img})`
       }}>
      
    </div>
    <div className="cardbody">
      <h1 className="cardTitle">{props.title}</h1>
  <h4 className="cardpost">{ props.post}</h4>
  <a className="cardlink" href="#" >{props.link}</a>
    </div>
  </div>
);
};


export default Section_one;