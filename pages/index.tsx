import type { NextPage } from "next";
import Header from "../components/Header";
import NewProjectButton from "../components/NewProjectButton";

const Home: NextPage = () => {
  return (
    <div className="bg-dark-darker">
      <Header />
      <main>
        <NewProjectButton />
      </main>
    </div>
  );
};

export default Home;
