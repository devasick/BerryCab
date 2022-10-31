const ContentTwo = (pageProps) => {
  return (
    <div>
      <div className="flex flex-col space-y-12 items-center justify-center bg-gray-50 w-full py-12">
        <div className="text-center space-y-3 ">
          <p className="text-xl font-medium text-berry">WHAT WE OFFER</p>
          <p className="text-4xl font-light text-gray-600">
            See What We Can Do for You
          </p>
        </div>
        <div className="container px-12  lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4  lg:space-y-0 space-y-2 w-full">
          {pageProps.whatWeOffeData.map((row, index) => (
            <div
              className={
                "col-span-" +
                row.colSpan +
                " row-span-1 bg-no-repeat bg-cover bg-center  h-64"
              }
              style={{
                backgroundImage: `url(/${row.image})`,
              }}
            >
              <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                <p className="text-white text-2xl font-medium p-8">
                  {row.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className=" text-white  bg-berry hover:bg-black   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};
export default ContentTwo;
