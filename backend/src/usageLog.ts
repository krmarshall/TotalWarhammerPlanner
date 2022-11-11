interface LogInterface {
  hits: number;
  modHits: {
    [key: string]: number;
  };
  misses: number;
  missList: Array<string>;
  techHits: number;
}

const usageData: LogInterface = {
  hits: 0,
  modHits: {
    vanilla2: 0,
    radious2: 0,
    sfo2: 0,
    vanilla3: 0,
    radious3: 0,
    mixu3: 0,
    lege3: 0,
    crys3: 0,

    other: 0,
  },
  misses: 0,
  missList: [],
  techHits: 0,
};

const usageLog = (hoursInterval: number) => {
  const hoursIntervalInternal = hoursInterval * 1000 * 60 * 60;
  setInterval(() => {
    outputLog();
  }, hoursIntervalInternal);
};

const outputLog = () => {
  console.log(`Skill Hits: ${usageData.hits}`);
  console.log('Skill Hits Breakdown:');
  console.log(usageData.modHits);
  console.log(`Skill Misses: ${usageData.misses}`);
  // console.log('API Missed Links:');
  // console.log(usageData.missList);
  console.log(`Tech Hits: ${usageData.techHits}`);

  usageData.hits = 0;
  usageData.modHits = {
    vanilla2: 0,
    radious2: 0,
    sfo2: 0,
    vanilla3: 0,
    radious3: 0,
    mixu3: 0,
    lege3: 0,
    crys3: 0,

    other: 0,
  };
  usageData.misses = 0;
  usageData.missList = [];
  usageData.techHits = 0;
};

export { usageLog, outputLog, usageData };
