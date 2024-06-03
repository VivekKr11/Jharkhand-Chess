import React from "react";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="relative h-full w-full flex  bg-[#7BC258] p-5">
          <div className="container m-auto p-36">
            <p className="text-white">
              <p className="font-bold text-[20px]">Offical website of</p>
              <p>ALL JHARKHAND CHESS ASSOCIATION</p>
              <p>Jharkhand Society Regn. No. 282 / 2013-14</p>
              <p>
                An Affliated to AICF & Recognised by Jharkhand Olympic
                Association
              </p>
            </p>
          </div>
          <div className="absolute -top-10 right-0 flex justify-end">
            <img src="./props/trace.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
