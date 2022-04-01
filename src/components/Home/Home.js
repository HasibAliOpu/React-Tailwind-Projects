import React from "react";
import Banner from "../../images/1st-page/Banner.png";
import Person from "../../images/1st-page/person.png";
const Home = () => {
  return (
    <div>
      <div>
        <section>
          <img src={Banner} alt="" />
        </section>
        <div className="md:grid grid-cols-2 md:p-32 md:gap-36">
          <div>
            <p className="text-cyan-500 font-mono font-semibold">
              <small>WELCOME THERE!</small>
            </p>

            <h1 className="pb-4 text-5xl font-semibold font-sans">
              <span className="text-cyan-400 text-7xl">W</span>elcome to the
              <br /> Best Business <br />
              Support Company
            </h1>

            <p className=" mt-8 pl-8 font-medium border-l-4 border-indigo-400">
              Venturastic Fund's is a Special Purpose Investment Holding Company
              (SPIC) formed with an impetus for creating, building business, &
              Merger and Acquisition, it will aim at developing itself as a
              strong global player, by building a proven track record and
              achieving significant milestones in the next 5 years.
            </p>
            <button className="border py-3 px-6  mt-6 border-sky-400 text-xs text-sky-500 font-medium hover:bg-sky-500 hover:text-white">
              MORE ABOUT US
            </button>
          </div>
          <div>
            <img src={Person} className="rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
