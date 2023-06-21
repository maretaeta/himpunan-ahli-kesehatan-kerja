import React from "react";
import banner from "../../assets/support.jpg";

const Detail = () => {
  return (
    <div className="max-w-6xl md:mx-auto grid justify-center pt-16 mx-7">
      <div className="pb-5">
        <h1 className="text-2xl font-bold text-center pb-5">
          Berita Hari Ini
        </h1>
        <img src={banner} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        inventore cupiditate facilis? Cupiditate, fugit? Mollitia consequatur in
        provident? Quaerat iure beatae accusantium tenetur minima facere nemo ab
        quia accusamus veritatis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Provident recusandae suscipit atque officiis optio
        praesentium necessitatibus placeat similique voluptas vitae, iusto porro
        iure neque magnam delectus facere! Velit, explicabo odit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Odio, eos placeat
        reprehenderit illum quos minima nihil soluta blanditiis nesciunt. Ullam
        alias officia obcaecati ipsam veniam. Id praesentium pariatur tempore
        cupiditate!
      </p>
    </div>
  );
};

export default Detail;
