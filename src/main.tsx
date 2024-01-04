import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { embedDashboard } from "@superset-ui/embedded-sdk";

/* const fetchGuestTokenFromBackend = async () => {
  try {
    const response = await fetch('/api/handler', {
      method: 'POST', // or 'GET', depending on your serverless function
      headers: {
        'Content-Type': 'application/json',
      },
      // Include any body data or parameters if required by your serverless function
      body: JSON.stringify({
        key: 'value',
        // ... other data
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return(data); // Process the response data
  } catch (error) {
    console.error('Fetch error: ', error);
  }
};

// Call this function when appropriate, like on a button click or component mount


embedDashboard({
  id: "f3d23444-b576-41c4-9b04-223e3e7780a1", // given by the Superset embedding UI
  supersetDomain: "https://superset.p.niva.no",
  mountPoint: document.getElementById("root"), // any html element that can contain an iframe
  fetchGuestToken: () => fetchGuestTokenFromBackend(),
  dashboardUiConfig: { // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional)
      hideTitle: true,
      filters: {
          expanded: true,
      }
  },
}); */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
