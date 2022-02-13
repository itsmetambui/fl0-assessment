import type { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";

import Header from "../components/Header";
import NewProjectButton from "../components/NewProjectButton";
import RecipeCard from "../components/RecipeCard";

const Home: NextPage = () => {
  const recipes = [
    {
      id: uuidv4(),
      background: {
        image: "/images/Mask Group 18611.png",
      },
      name: "Next.js Realtime chat app",
    },
    {
      id: uuidv4(),
      background: {
        color: "#7786C0",
        image: "/images/Mask Group -1.png",
      },
      name: "React.js Realtime chat app",
    },
    {
      id: uuidv4(),
      background: {
        image: "/images/Mask Group 18611.png",
      },
      name: "Next.js Subscription and Auth",
    },
    {
      id: uuidv4(),
      background: {
        color: "#D3689A",
        image: "/images/Mask Group -2.png",
      },
      name: "Expo Starter tabs with Auth",
    },
  ];

  return (
    <div className="mx-auto bg-dark-darker">
      <Header />
      <main>
        <NewProjectButton />
        <hr />
        <div className="flex justify-start gap-6">
          {recipes.map(({ id, background, name }) => (
            <RecipeCard key={id} background={background} name={name} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
