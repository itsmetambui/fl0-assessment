import type { NextPage } from "next";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";

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
      <main className="max-w-5xl mx-auto ">
        <section className="py-6">
          <NewProjectButton />
        </section>

        <hr className="border-b border-dark-lighter" />

        <section className="py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-start gap-2">
              <div className="pt-1">
                <Image
                  src="/images/Lightning.svg"
                  height={16}
                  width={16}
                  alt="lightnign"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-spacegrey-lighter">
                  Recommended recipes
                </p>
                <p className="text-xs font-medium text-spacegrey">
                  Browse through our recipes to learn about new use cases to
                  implement in your app
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button className="py-1 text-xs font-semibold text-spacegrey">
                View all
              </Button>
              <Button className="py-2">
                <Image
                  src="/images/close.svg"
                  height={8}
                  width={8}
                  alt="close"
                />
              </Button>
            </div>
          </div>

          <div className="flex justify-start gap-6">
            {recipes.map(({ id, background, name }) => (
              <RecipeCard
                key={id}
                background={background}
                name={name}
                className="flex-1"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
