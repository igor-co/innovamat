import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

export const PdfViewer = ({ url, activateControlls = true }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js'>
      <Viewer
        fileUrl={url}
        plugins={activateControlls ? [defaultLayoutPluginInstance] : []}
        defaultScale={1}
      />
    </Worker>
  );
};
