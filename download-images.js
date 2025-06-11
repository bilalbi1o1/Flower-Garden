const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
    filename: 'hero-flowers.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d',
    filename: 'spring-flowers.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1548248823-ce16a73b6d49',
    filename: 'roses.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    filename: 'garden.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    filename: 'testimonial1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    filename: 'testimonial2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    filename: 'testimonial3.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d',
    filename: 'peony.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, 'public', 'images', filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  for (const image of images) {
    await downloadImage(image.url, image.filename);
  }
};

downloadAllImages().catch(console.error); 