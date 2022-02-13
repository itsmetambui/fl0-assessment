import type { NextPage } from "next";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";

import Header from "../components/Header";
import NewProjectButton from "../components/NewProjectButton";
import ProjectCard from "../components/ProjectCard";
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

  const projects = [
    {
      id: uuidv4(),
      icon: "👾",
      name: "Onboarding Wizzard",
      versions: [
        {
          number: 3.7,
          env: "uta",
          timestamp: new Date(),
        },
        {
          number: 3.6,
          env: "prod",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: uuidv4(),
      icon: "⚾",
      name: "Sale Properties",
      versions: [
        {
          number: 4.1,
          env: "uta",
          timestamp: new Date(),
        },
        {
          number: 4.0,
          env: "prod",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: uuidv4(),
      icon: "🏓",
      name: "Rental Properties",
      versions: [
        {
          number: 2.1,
          env: "uta",
          timestamp: new Date(),
        },
        {
          number: 2.0,
          env: "prod",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: uuidv4(),
      icon: "👑",
      name: "Onboarding Wizzard",
      versions: [
        {
          number: 2.7,
          env: "uta",
          timestamp: new Date(),
        },
        {
          number: 2.5,
          env: "prod",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: uuidv4(),
      icon: "🏏",
      name: "Sale Properties",
      versions: [
        {
          number: 5.7,
          env: "uta",
          timestamp: new Date(),
        },
        {
          number: 5.5,
          env: "prod",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: uuidv4(),
      icon: "🚀",
      name: "Map Filters",
      versions: [
        {
          number: 1.7,
          env: "uta",
          timestamp: new Date(),
        },
        {
          number: 1.0,
          env: "prod",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: uuidv4(),
      icon: "🔫",
      name: "Onboarding Wizzard",
      versions: [
        {
          number: 1.9,
          env: "uta",
          timestamp: new Date(),
        },
        {
          number: 1.0,
          env: "prod",
          timestamp: new Date(),
        },
      ],
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

        <section className="py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-start gap-2">
              <div className="pt-1">
                <Image
                  src="/images/vuesax-linear-calendar.svg"
                  height={16}
                  width={16}
                  alt="lightning"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-spacegrey-lighter">
                  Recent Projects
                </p>
              </div>
            </div>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Image
                  src="/images/Icon_search.svg"
                  height={16}
                  width={16}
                  alt="lightnign"
                />
              </span>
              <input
                className="block px-3 py-2 text-xs border rounded text-spacegrey-darker w-60 border-dark-lighter bg-dark-darker text-medium focus:outline-none focus:border-dark-lighter focus:ring-dark-lighter focus:ring-1 text-"
                placeholder="Find project"
                type="text"
                name="search"
              />
            </label>
          </div>

          <div>
            {projects.map(({ id, icon, name, versions }) => (
              <ProjectCard
                key={id}
                id={id}
                icon={icon}
                name={name}
                versions={versions}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
