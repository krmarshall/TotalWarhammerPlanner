import app from './app';
import { usageLog } from './usageLog';

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
  console.log(`Environment ${process.env.NODE_ENV}`);
});

usageLog(8);
