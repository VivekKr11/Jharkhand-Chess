import React from "react";

const Info = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-11 container m-auto">
      <div className="w-full md:w-1/2">
        <h1 className="font-cinzel font-bold flex justify-center text-2xl md:text-[60px] text-[#2C1B16]  text-center md:leading-[60px]">
          About All Jharkhand Chess Association
        </h1>
        <p className="font-sans text-md md:text-xl p-4 text-[#58362b] text-justify md:text-center md:leading-[24px] md:mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          soluta assumenda aut, quibusdam quisquam ad consequuntur reprehenderit
          rem eum. In aliquid distinctio, dolorem molestiae quod harum
          temporibus omnis magnam itaque. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nesciunt sed voluptas sapiente!
          Consequatur aliquid dolores facilis, aperiam commodi ipsum dolorem
          voluptatem reiciendis velit, ducimus earum perspiciatis sequi a quas
          nemo, sapiente eaque sed accusamus asperiores mollitia?
          <p>
            Cupiditate corrupti ducimus porro, id mollitia, natus,
            necessitatibus error autem vel velit inventore. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ratione eos ab odio rem quis
            corporis earum aliquam iure, ut iste dolorum, sed recusandae
            accusantium dicta assumenda, nihil commodi dolor nostrum! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis?
          </p>
        </p>
      </div>
      <div className="w-full md:w-2/5 flex justify-center items-center">
        <img className="md:h-[400px]" src="./props/board2.png" alt="" />
      </div>
    </div>
  );
};

export default Info;
