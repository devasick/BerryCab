import Image from "next/image";
import Image1 from "../public/image_01-6.jpg";
import Image2 from "../public/image_06.jpg";
import Image3 from "../public/image_07.jpg";
import { FaCheck, FaMale, FaGlobe } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center  h-72"
          style={{
            backgroundImage: `url(/heading_02.jpg)`,
          }}
        >
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8">About Us</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
              Our prime focus is customer satisfaction- and we work hard to
              achieve it. We always consider the convenience of our customers
              before booking our staff transportation experienced staff
              experience transportation. Our vehicles are well-maintained
              well-maintained and free from defects and accidents. Each one is
              also registered with the state and carries our company&apos;s
              insurance. This way, you can be sure that your trip will be safe
              and hassle-free.
            </p>
            <p className="text-xl font-medium">
              Our staff is knowledgeable and friendly to make your trip stress
              free. Each driver has at least two years of experience working for
              a reputable company. They are friendly, courteous, and punctual
              and can speak English, Hindi, and French, transportation
              experienced maintained well and English fluently. They also
              undergo regular training sessions so they can improve their skills
              with each passing year. In addition, our office staff is very
              helpful and will do whatever they can to answer your questions
              about transportation or destinations in the area.
            </p>
            <p className="text-xl font-medium">
              We take great pride in being able to provide exceptional service
              with no detail unattended- ensuring your every expectation is met
              at all times! Safety is always a top priority for us since delays
              seriously affect timelines for all parties involved in
              transportation exchanges. We wish you the best of luck during your
              next journey!
            </p>
            <div className="space-y-3 text-gray-500">
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Affordable rates</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>24/7 Full-Service Transportation</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Flexible booking</p>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <FaCheck className="w-9 h-9 border rounded-full text-amber-500  p-2" />
                <p>Safe driving</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={Image1} alt="Picture of the author" />
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-xl font-medium text-amber-600">
              COMMITMENT TO WORK
            </p>
            <p className="text-4xl font-light text-gray-600">Our Competences</p>
            <div className="grid lg:grid-cols-2 gap-12 py-8">
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image2} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-600">
                    PROFESSIONALISM
                  </p>
                  <p className="text-gray-500">
                    We have a team of professionals who are dedicated to making
                    sure your trip goes smoothly. From our friendly drivers to
                    our knowledgeable customer service representatives, we
                    strive to make each and every ride enjoyable.
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white space-y-3">
                <Image src={Image3} alt="Picture of the author" />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-600">
                    COMMITMENT
                  </p>
                  <p className="text-gray-500">
                    Our office is open twenty four hours a day, seven days a
                    week. You name the occasion – we’ll make the ride flawless.
                    Whether you require a chauffeured vehicle for business or
                    pleasure, close to home or in a new city we are always
                    there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default AboutUs;
