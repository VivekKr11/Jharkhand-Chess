import React from "react";

const Info = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-11 container m-auto">
      <div className="w-full md:w-1/2">
        <h1 className="font-cinzel font-bold flex justify-center text-2xl md:text-[60px] text-[#2C1B16]  text-center md:leading-[60px]">
          About All Jharkhand Chess Association
        </h1>
        <p className="font-sans text-md md:text-xl p-4 text-[#58362b] text-justify md:text-center md:leading-[24px] md:mt-4">
          The All Jharkhand Chess Association (AJCA) is a premier organization
          dedicated to the promotion and development of chess in the state of
          Jharkhand. Established with the vision of nurturing talent and
          fostering a love for chess, AJCA has been instrumental in organizing
          numerous chess tournaments, training sessions, and workshops for
          players of all ages and skill levels. Our mission is to create a
          robust chess culture in Jharkhand by providing players with the
          resources, opportunities, and guidance they need to excel. We aim to
          identify and nurture young talent, offering them the platform to
          compete at state, national, and international levels. Our vision is to
          see Jharkhand emerge as a powerhouse in the chess world, producing
          champions who can represent the state with pride.
        </p>
      </div>
      <div className="w-full md:w-2/5 flex justify-center items-center">
        <img className="md:h-[400px]" src="./props/board2.png" alt="" />
      </div>
    </div>
  );
};

export default Info;
