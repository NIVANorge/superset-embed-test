import { VercelRequest, VercelResponse } from '@vercel/node';
import https from 'https';

export default function handler(request: VercelRequest, response: VercelResponse) {
  // Define the data you need to send to the API
  const data = JSON.stringify({
    "user": {
      "username": "Jemmima.Knight@niva.no",
      "first_name": "Jemmima",
      "last_name": "Knight"
    },
    "resources": [{
      "type": "dashboard",
      "id": "b26bed6e-0d32-4726-86fe-653d27c29110"
    }],
    "rls": []
  });

  // Define the options for the HTTPS request
  const options = {
    hostname: 'superset.p.niva.no',  // Replace with the API's hostname
    port: 443,                   // Standard HTTPS port
    path: '/api/v1/security/guest_token/',          // Replace with the actual path
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  // Make the request to the external API
  const req = https.request(options, (res) => {
    let responseBody = '';

    res.on('data', (d) => {
      responseBody += d;
    });

    res.on('end', () => {
      // Here you handle the response from the external API
      // Assuming the response contains a token
      console.log(responseBody)
      const apiResponse = JSON.parse(responseBody);
      response.status(200).json({ token: apiResponse.token });
    });
  });

  req.on('error', (error) => {
    // Handle any errors in the request
    console.error(error);
    response.status(500).json({ error: 'Error making request to external API' });
  });

  // Send the request with the data
  req.write(data);
  req.end();
}
