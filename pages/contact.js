import MapSection from "../components/map";
import Data from "./api/data.json";

const Contact = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <MapSection />
        <div className="lg:grid lg:grid-cols-2">
          <div className="col-span-1 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">
              Berry Cab <br />
            </p>
            <p className="text-xl font-light text-gray-500">
              {Data.contact[0].address}
            </p>
            <p className="text-xl font-light text-gray-500">
              Phone: {Data.contact[0].phone}
            </p>
            <p className="text-xl font-light text-gray-500">
              Email: {Data.contact[0].email}
            </p>
          </div>
          <div className="col-span-1 bg-gray-100 p-24 flex flex-col space-y-8">
            <p className="text-2xl text-gray-600">
              Professional chauffeur services
            </p>
            <p className="text-xl font-light text-gray-500">
              Professional chauffeur services are becoming increasingly popular
              among people who want to travel in style. These services provide
              luxury vehicles at affordable prices. You can hire a professional
              driver to take you around town, to work, or even to school. If
              you’re looking for a reliable service provider, then look no
              further than us! We have been providing high-quality chauffeur
              services since 2014. Our drivers are highly trained professionals
              who know how to handle any situation.
            </p>
            <p className="text-2xl text-gray-600">Affordable rates</p>
            <p className="text-xl font-light text-gray-500">
              Our rates are extremely competitive compared to other companies.
              We also offer discounts if you book for longer trips.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center  space-y-4 py-24">
          <p className="text-3xl text-center font-light text-gray-600">
            Private chauffeur, sightseeing tour? <br />
            Please fill out the form below with questions or comments
          </p>
          <div className=" container mx-auto px-16 lg:grid  lg:grid-cols-2 lg:grid-rows-3   w-full">
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="text-gray-900  block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="col-span-1 row-span-3 p-4  border">
              <label forHtml="message" className="block mb-2  text-gray-900 ">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-gray-900  "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="col-span-1 row-span-1  p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className=" text-gray-900 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="col-span-1 row-span-1 p-4 px-8 border">
              <label htmlFor="email" className="block mb-2  text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="  text-gray-900 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
          </div>
          <button
            type="button"
            className=" text-white  bg-berry hover:bg-black   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default Contact;
