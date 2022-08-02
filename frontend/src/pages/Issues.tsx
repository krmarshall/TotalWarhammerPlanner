const Issues = () => {
  return (
    <div className="flex flex-col place-content-center mt-16 mx-64 select-text">
      <div className="flex flex-row place-content-center">
        <hr className="grow mt-[1.6rem] opacity-50" />
        <h1 className="w-max text-center text-5xl mx-2 text-gray-200 text-shadow">Known Issues</h1>
        <hr className="grow mt-[1.6rem] opacity-50" />
      </div>
      <ul className="list-disc list-inside">
        <li className="text-gray-200 text-2xl">SFO2 Son of Bretonnia has a hidden skill in skilltree</li>
        <li className="text-gray-200 text-2xl">
          Radious 2 needs a look over for portraits, names, spellLores, general bugs.
        </li>
        <li className="text-gray-200 text-2xl">Radious 2 Wood Seer mounts missing skill titles</li>
        <li className="text-gray-200 text-2xl">Radious 2 boxed issues, see Fimir Noble</li>
        <li className="text-gray-200 text-2xl">
          Artefacts 3 item effects are getting linked to background skills leaving the quest item blank.
        </li>
      </ul>

      <div className="flex flex-row place-content-center mt-14">
        <hr className="grow mt-[1.6rem] opacity-50" />
        <h1 className="w-max text-center text-5xl mx-2 text-gray-200 text-shadow">Report an Issue</h1>
        <hr className="grow mt-[1.6rem] opacity-50" />
      </div>
      <p className="text-center text-gray-200 text-2xl">Halp</p>
    </div>
  );
};

export default Issues;
