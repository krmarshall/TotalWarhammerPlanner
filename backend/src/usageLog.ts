const usageData = {
  hits: 0,
  misses: 0,
};

const usageLog = (hoursInterval: number) => {
  const hoursIntervalInternal = hoursInterval * 1000 * 60 * 60;
  setInterval(() => {
    console.log(`API Hits: ${usageData.hits}`);
    console.log(`API Misses: ${usageData.misses}`);
    usageData.hits = 0;
    usageData.misses = 0;
  }, hoursIntervalInternal);
};

export { usageLog, usageData };
