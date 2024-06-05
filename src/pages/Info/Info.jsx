import React from "react";

const Info = () => {
  return (
    <div className="flex justify-center gap-11">
      <div className="w-1/2">
        <div className="relative flex justify-center">
          <img className="h-[500px] mt-20" src="./props/chess.svg" alt="" />
          <div className="absolute -top-16">
            <h1 className="font-cinzel font-bold flex justify-center text-[70px] text-[#2C1B16] mt-16">
              About Ajcs
            </h1>
            <p className="font-kalam text-xl p-3 text-[#76483a]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              soluta assumenda aut, quibusdam quisquam ad consequuntur
              reprehenderit rem eum. In aliquid distinctio, dolorem molestiae
              quod harum temporibus omnis magnam itaque. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Nesciunt sed voluptas sapiente!
              Consequatur aliquid dolores facilis, aperiam commodi ipsum dolorem
              voluptatem reiciendis velit, ducimus earum perspiciatis sequi a
              quas nemo, sapiente eaque sed accusamus asperiores mollitia?
              Cupiditate corrupti ducimus porro, id mollitia, natus,
              necessitatibus error autem vel velit inventore. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ratione eos ab odio rem
              quis corporis earum aliquam iure, ut iste dolorum, sed recusandae
              accusantium dicta assumenda, nihil commodi dolor nostrum!
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, illum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus quasi animi, hic aperiam ipsam nulla rem illo libero placeat voluptatem enim excepturi, magni officiis inventore. Vel, ullam accusantium!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minus optio totam ipsam maxime dolorum a in quasi natus repudiandae. Exercitationem laudantium voluptatum sapiente quisquam magnam temporibus obcaecati aut reprehenderit.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <img className="h-[400px]" src="./props/board2.png" alt="" />
      </div>
    </div>
  );
};

export default Info;
