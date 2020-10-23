const dns = require('dns');
const hostname = 'google.com';
const ip = '172.217.20.206';

dns.lookup(hostname, (error, address) => {
  console.log(`lookup: IP ${address} of ${hostname}`);
});

//IPv4 addresses
dns.resolve4(hostname, (error, address) => {
  console.log(`resolve4: IP ${address} of ${hostname}`);
});

//shows A record
dns.resolve(hostname, 'A', (error, address) => {
  console.log(`resolve for A record: IP ${address} of ${hostname}`);
});

//shows MX record
dns.resolveMx(hostname, (error, address) => {
  console.log(`resolve for MX record: IP ${address} of ${hostname}`);
});

dns.reverse(ip, (error, hostnameList) => {
  console.log(`hostnames ${hostnameList} of ${ip}`);
});
