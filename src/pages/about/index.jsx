import React, { useState } from "react";
import AboutStyle, {
  PrimaryBgImage,
  Paragraph,
  Title,
  SectionTitle
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PrimaryImage from "../../assets/images/beograd.jpg";
import Mare from "../../assets/images/mare.jpg";
import ProfileCard from "../../components/Profile";

const AboutPage = () => {
  const [state, setState] = useState([
    {
      id: 1,
      name: "Nikola Markovic",
      position: ["Founder", "Trip designer", "Guide"],
      desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus quae repudiandae quas incidunt nam at vero esse, suscipit blanditiis corrupti, veniam ipsa quod, quibusdam tenetur dolor exercitationem delectus repellendus.",
      img: Mare
    },
    {
      id: 2,
      name: "Djordje Savic",
      position: ["Co-founder", "Trip designer", "Guide"],
      desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus quae repudiandae quas incidunt nam at vero esse, suscipit blanditiis corrupti, veniam ipsa quod, quibusdam tenetur dolor exercitationem delectus repellendus.",
      img: Mare
    },
    {
      id: 3,
      name: "Nikola Markovic",
      position: ["Founder", "Trip designer", "Guide"],
      desc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos doloribus quae repudiandae quas incidunt nam at vero esse, suscipit blanditiis corrupti, veniam ipsa quod, quibusdam tenetur dolor exercitationem delectus repellendus.",
      img: Mare
    }
  ]);

  return (
    <>
      <Header />
      <AboutStyle>
        <div className="section-one">
          <Title>
            Experience most beautiful places Serbia has to give with us!
          </Title>
          <div className="image">
            <PrimaryBgImage src={PrimaryImage} alt="image" />
          </div>
        </div>
        <div className="section-two">
          <SectionTitle>Who Are We ?</SectionTitle>
          <Paragraph>
            We are group of people that share same passion about our country.
            Through beautiful stories and magnificent places we discover Serbia
            to tourists that are coming here. We are here to show you Serbia in
            different way. An traditional, wonderful way. That is how we see our
            country. Special hidden diamond in the centar of Europe. Through
            centuries Serbia was charging and we had various people and cultures
            here. But now we created unique experience for you to feel it as it
            is. Authentic, adorable and outstanding. Visit Serbia and let us
            show you secret places that make this place special.
          </Paragraph>
        </div>
        <div className="section-three">
          <SectionTitle>Our Team</SectionTitle>
          <div className="grid">
            {state.map(item => (
              <ProfileCard item={item} />
            ))}
          </div>
        </div>
      </AboutStyle>
      <Footer />
    </>
  );
};
export default AboutPage;
