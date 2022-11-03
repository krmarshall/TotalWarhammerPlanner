interface LogInterface {
  hits: number;
  modHits: {
    [key: string]: number;
  };
  misses: number;
  missList: Array<string>;
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
};

const usageLog = (hoursInterval: number) => {
  const hoursIntervalInternal = hoursInterval * 1000 * 60 * 60;
  setInterval(() => {
    outputLog();
  }, hoursIntervalInternal);
};

const outputLog = () => {
  console.log(`API Hits: ${usageData.hits}`);
  console.log('API Hits Breakdown:');
  console.log(usageData.modHits);
  console.log(`API Misses: ${usageData.misses}`);
  console.log('API Missed Links:');
  console.log(usageData.missList);
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
};

export { usageLog, outputLog, usageData };
