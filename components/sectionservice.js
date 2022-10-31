import { FaEnvira, FaCodepen, FaBusAlt, FaDrawPolygon } from "react-icons/fa";

const Service = (pageProps) => {
  const serviceIcon = (rowData) => {
    let icon;
    if (rowData === "FaEnvira") {
      icon = (
        <FaEnvira className="w-16 h-16 text-berry bg-gray-100 rounded-full p-1" />
      );
    } else if (rowData === "FaCodepen") {
      icon = (
        <FaCodepen className="w-16 h-16 text-berry bg-gray-100 rounded-full p-1" />
      );
    } else if (rowData === "FaBusAlt") {
      icon = (
        <FaBusAlt className="w-16 h-16 text-berry bg-gray-100 rounded-full p-1" />
      );
    } else {
      icon = (
        <FaDrawPolygon className="w-16 h-16 text-berry bg-gray-100 rounded-full p-1" />
      );
    }
    return icon;
  };
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
      {pageProps.serviceData.map((row, index) => (
        <div
          className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center"
          key={index}
        >
          {serviceIcon(row.icon)}
          <p className="text-2xl font-medium text-gray-600">{row.title}</p>
          <p className="text-gray-600">{row.content}</p>
        </div>
      ))}
    </div>
  );
};
export default Service;
