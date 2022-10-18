interface LogInterface {
  hits: number;
  misses: number;
  missList: Array<string>;
}

const usageData: LogInterface = {
  hits: 0,
  misses: 0,
  missList: [],
};

const usageLog = (hoursInterval: number) => {
  const hoursIntervalInternal = hoursInterval * 1000 * 60 * 60;
  setInterval(() => {
    console.log(`API Hits: ${usageData.hits}`);
    console.log(`API Misses: ${usageData.misses}`);
    console.log('API Missed Links:');
    console.log(usageData.missList);
    usageData.hits = 0;
    usageData.misses = 0;
    usageData.missList = [];
  }, hoursIntervalInternal);
};

export { usageLog, usageData };
