import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className="w-full h-full content-center">
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        {clicked && <p>You clicked me!</p>}
        <div>
          <Button onClick={() => setClicked(!clicked)}>Click me!</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
