import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import Image1 from "../public/image_01-6.jpg";
import Image2 from "../public/image_01-5.jpg";
import Image3 from "../public/image_10-1.jpg";
import Image4 from "../public/image_10-2.jpg";
import Image5 from "../public/image_03-2.jpg";
const Contents = (pageProps) => {
  return (
    <div className="container mx-auto py-24  space-y-20 w-full">
      <div className=" lg:flex lg:flex-row justify-center px-12">
        <div>
          <Image src={Image1} alt="Picture of the author" />
        </div>
        <div className="mt-12">
          <Image src={Image2} alt="Picture of the author" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        <p className="text-3xl font-light text-gray-600">
          I invite you to try our service and I personally guarantee you will
          <br />
          have a fully satisfied experience.
        </p>
        <p className="text-xl text-gray-500">ANDRO Tomas - CHAIRMAN CEO</p>
      </div>
      <div className="lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className="text-3xl font-medium text-gray-600">
            {pageProps.customerserviceData[0].title}
          </p>
          <p className="text-2xl font-light text-gray-500">
            {pageProps.customerserviceData[0].content}
          </p>
          <button
            type="button"
            className="text-white  bg-berry hover:bg-black   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <Image src={Image3} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image4} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image5} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;
