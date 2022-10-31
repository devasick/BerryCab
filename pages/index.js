import Header from "../components/header";
import SectionService from "../components/sectionservice";
import SectionOneHomePage from "../components/sectiononehomepage";
import SectionTwoHomePage from "../components/sectiontwohomepage";
import SectionThereHomePage from "../components/sectiontherehomepage";
import Data from "./api/data.json";

export default function Home() {
  return (
    <div>
      <Header sliderData={Data.slider} />
      <SectionService serviceData={Data.service} />
      <SectionOneHomePage customerserviceData={Data.customerservice} />
      <SectionTwoHomePage whatWeOffeData={Data.whatWeOffer} r />
      <SectionThereHomePage />
    </div>
  );
}
