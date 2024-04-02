import { ReportHandler } from 'web-vitals';

interface Metric {
  name: string;
  value: number;
}

type PerfEntryCallback = (entry: Metric) => void;

const mapPerfEntryToReportHandler = (onPerfEntry: PerfEntryCallback): ReportHandler => {
  return ({ name, value }) => {
    onPerfEntry({ name, value });
  };
};

const reportWebVitals = (onPerfEntry?: PerfEntryCallback): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(mapPerfEntryToReportHandler(onPerfEntry));
      getFID(mapPerfEntryToReportHandler(onPerfEntry));
      getFCP(mapPerfEntryToReportHandler(onPerfEntry));
      getLCP(mapPerfEntryToReportHandler(onPerfEntry));
      getTTFB(mapPerfEntryToReportHandler(onPerfEntry));
    });
  }
};

export default reportWebVitals;
