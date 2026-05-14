import https from 'https';
https.get('https://syncroedu.beacademics.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
});
