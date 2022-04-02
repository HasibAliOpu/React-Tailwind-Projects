import React from "react";
import Banner from "../../images/1st-page/Banner.png";
import Person from "../../images/1st-page/person.png";
import CommunityIcon from "../../images/icon/community 1.png";
import WorkForHomeIcon from "../../images/icon/work-from-home 1.png";
import StarIcon from "../../images/icon/star 1.png";
import SaveMoneyIcon from "../../images/icon/save-money (1) 1.png";
const Home = () => {
  return (
    <div>
      {/* banner and more about us section */}
      <section>
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
            <img src={Person} alt="" />
          </div>
        </div>
      </section>
      {/* middle section */}
      <section>
        <div className="grid md:grid-cols-3 font-medium">
          <div className="bg-orange-200 px-10 py-16 ">
            <div className="flex justify-around mb-6">
              <h1 className="text-6xl  text-sky-400">01</h1>
              <p className="text-2xl">
                Fashion And <br />
                Luxury
              </p>
            </div>
            <p>
              At the core of every project that will be released by Venturastic
              in fashion and luxury, there will be quintessentially a strong
              commitment to unmatched creativity and quality, aligned with the
              changing needs of the international market.
            </p>
          </div>
          <div className="px-10 py-16">
            <div className="flex justify-around mb-6">
              <h1 className="text-6xl  text-sky-400">02</h1>
              <p className="text-2xl font-medium">
                Media and <br /> Entertainment
              </p>
            </div>
            <p>
              Forward-looking Media and entertainment business, whose mission is
              to enable unique investment opportunities, by allowing investors
              to express their aspirations and aesthetics with the highest level
              of quality and refinement.
            </p>
          </div>
          <div className="bg-orange-200 px-10 py-16">
            <div className="flex justify-around mb-6">
              <h1 className="text-6xl  text-sky-400">03</h1>
              <p className="text-2xl font-medium">Technology</p>
            </div>
            <p>
              Technology growth has been led by the rapid advancement and
              proliferation of Artificial intelligence, cloud, and machine
              learning, virtually impacting every business and consumer in its
              path.
            </p>
          </div>
        </div>
      </section>
      {/* Leader section */}
      <section className="">
        <div className="grid md:grid-cols-2 gap-28 md:p-32">
          <div>
            <div>
              <p className="text-cyan-500 font-mono font-semibold border-b-2 border-cyan-400 w-1/5 mb-1">
                <small>WHO WE ARE</small>
              </p>

              <h1 className="pb-4 text-6xl font-serif">
                We are Leaders
                <br />
                on the Market
              </h1>

              <p className=" mt-8 pl-4 font-medium border-l-2 border-indigo-400">
                We will identify, conceive and build business that will <br />{" "}
                create substantial long-term value for our investing <br />{" "}
                community
              </p>
              <button className="border py-3 px-6  mt-6 border-sky-400 text-xs text-sky-500 font-medium hover:bg-sky-500 hover:text-white">
                READ MORE
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-6 font-semibold text-2xl mb-3">
              <img
                src={WorkForHomeIcon}
                className="bg-cyan-500 p-4 rounded-full"
                alt=""
              />
              <h1>WHAT WOULD WE DO</h1>
            </div>
            <div className="flex items-center gap-6 font-semibold text-2xl mb-3">
              <img
                src={SaveMoneyIcon}
                className="bg-cyan-500 p-4 rounded-full"
                alt=""
              />
              <h1>
                Special Purpose <br /> Investments the Venturastic <br /> way
              </h1>
            </div>
            <div className="flex items-center gap-6 font-semibold text-2xl mb-3">
              <img
                src={CommunityIcon}
                className="bg-cyan-500 p-4 rounded-full"
                alt=""
              />
              <h1>
                Borderless Investing <br /> Community with focused <br />{" "}
                vertical
              </h1>
            </div>
            <div className="flex items-center gap-6 font-semibold text-2xl">
              <img
                src={StarIcon}
                className="bg-cyan-500 p-4 rounded-full"
                alt=""
              />
              <h1>
                Holistic view to invest in the <br />
                best opportunities
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Team Details section */}
      <section>
        <blockquote className="text-center py-24 px-40 bg-orange-200">
          <p className="mb-4 text-2xl">
            <small className="text-cyan-500 font-sans font-semibold border-b-2 border-cyan-400">
              OUR STAFF
            </small>
          </p>
          <h1 className="text-6xl font-serif mb">
            Diversity breeds creativity, leading to better decisions and
            outcomes at Venturastic
          </h1>
          <br />
          <h3 className="text-xl">
            We have a formidable, coherent, accomplished team, bringing in
            differentiated domain expertise, access, thoughtful deliberation and
            organization building to the business we create and build.
          </h3>
          <button className="border py-3 px-14 mt-6 bg-white rounded border-sky-400 text-xs text-sky-500 font-medium hover:bg-sky-500 hover:text-white">
            READ MORE
          </button>
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
