const path = require('path');
const pinataSDK = require('pinata-sdk');

const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET
);

const folderPath = path.join(process.cwd(), 'bigbro');
console.log('Pinning folder:', folderPath);

pinata.pinFromFS(folderPath, { pinataMetadata: { name: 'bigbro-site' } })
  .then(result => console.log('Pinned! CID:', result.IpfsHash))
  .catch(err => {
    console.error('Pin failed:', err);
    process.exit(1);
  });
