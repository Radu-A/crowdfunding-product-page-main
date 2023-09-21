import Title from "./Title/Title";
import Resume from "./Resume/Resume";
import Description from "./Description/Description";
import { useState } from "react";

const Main = () => {

  return (
    <main>
      <Title />
      <Resume />
      <Description />
    </main>
  );
};

export default Main;
