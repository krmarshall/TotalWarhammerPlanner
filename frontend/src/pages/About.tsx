const About = () => {
  return (
    <div className="flex flex-col place-content-center mt-16 mx-64 select-text">
      <div className="flex flex-row place-content-center">
        <hr className="grow mt-[1.6rem] opacity-50" />
        <h1 className="w-max text-center text-5xl mx-2 text-gray-200 text-shadow">About</h1>
        <hr className="grow mt-[1.6rem] opacity-50" />
      </div>
      <p className="text-center text-gray-200 text-2xl">
        Total Warhammer Planner is a tool for exploring, building, and sharing character skill trees in Total Warhammer
        2/3 and various mods for both titles.
      </p>

      <div className="flex flex-row place-content-center mt-24">
        <hr className="grow mt-[1.6rem] opacity-50" />
        <h1 className="w-max text-center text-5xl mx-2 text-gray-200 text-shadow">Patreon?</h1>
        <hr className="grow mt-[1.6rem] opacity-50" />
      </div>
      <p className="text-center text-gray-200 text-2xl">Beg for money here</p>
    </div>
  );
};

export default About;
