import app from './app';
import { usageLog } from './usageLog';

const port = process.env.PORT || 5000;
let logInterval = 24;
if (process.env.LOGINTERVAL !== undefined) {
  logInterval = parseInt(process.env.LOGINTERVAL);
}

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
  console.log(`Environment ${process.env.NODE_ENV}`);
});

usageLog(logInterval);
