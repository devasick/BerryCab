import { FaFeatherAlt } from "react-icons/fa";
const Services = () => {
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
            <p className="text-white text-5xl font-light  p-8">Our Services</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
              Our customer service commitment
            </p>
            <p className="text-gray-500">
              By offering exceptional service with no detail unattended, we have
              been fortunate enough to have developed into one of the leading
              providers of ground transportation in the area. Our goal is to
              make your travels safe, effortless and on schedule. We are
              committed to customer service with regard to “delivery promise”
              and our aim towards “zero defect”.
            </p>
          </div>
          <div className="col-span-1 flex flex-row space-x-3 ">
            <FaFeatherAlt className="w-24 h-24 text-amber-600" />
            <div className="">
              <p className="text-3xl  font-light text-gray-500">
                Strong relationships are the foundation of our success. At every
                level of our business, we forge two way partnerships based on
                trust, integrity and respect.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-4xl font-light text-gray-600">
              The perfect collection of vehicles – whatever your occasion is
              choose our service
            </p>
            <div className="py-16 lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:space-y-0 space-y-2 w-full">
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_01-4.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    AIRPORT TRANSFER
                  </p>
                </div>
              </div>
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_02-4.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    WORLDWIDE TRANSPORTATION
                  </p>
                </div>
              </div>
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_02-4.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    CORPORATE TRAVEL
                  </p>
                </div>
              </div>
              <div
                className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_04-4.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    CHARTER SERVICE
                  </p>
                </div>
              </div>
              <div
                className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_05-2.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    SPECIAL EVENT LIMOUSINE
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
export default Services;
