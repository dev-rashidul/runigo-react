import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header2 from "../../Shared/Header/Header2";
import FavMentor from "./FavMentor/FavMentor";
import MainLesson from "./MainLesson/MainLesson";

const Lesson = () => {
  return (
    <>
      {/* // <!-- Header Part HTML Start --> */}

      <header>
        {/* <!-- Header Section HTML Start --> */}

        <Header2></Header2>

        {/* <!-- Header Section HTML End --> */}
      </header>

      {/* <!-- Header Part HTML End --> */}

      {/* <!-- Main Part HTML Start --> */}

      <main>
        {/* <!-- Lesson Section HTML Start --> */}

        <MainLesson></MainLesson>

        {/* <!-- Lesson Section HTML End --> */}

        {/* <!-- Favorite Mentor Section HTML Start --> */}

        <FavMentor></FavMentor>

        {/* <!-- Favorite Mentor Section HTML End --> */}
      </main>

      {/* <!-- Main Part HTML End --> */}

      {/* <!-- Footer Part HTML Start --> */}

      <Footer></Footer>

      {/* <!-- Footer Part HTML End --> */}
    </>
  );
};

export default Lesson;
