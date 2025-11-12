const https = require('https');
const { JSDOM } = require('jsdom');

const fetchPage = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

const extractProductData = (doc) => {
  const name = doc.querySelector('h1.product_title')?.textContent.trim() || '';
  const shortDesc = doc.querySelector('.woocommerce-product-details__short-description')?.textContent.trim() || '';

  const descSection = doc.querySelector('#tab-description');
  let fullDesc = '';
  if (descSection) {
    const paragraphs = Array.from(descSection.querySelectorAll('p'));
    fullDesc = paragraphs.map(p => p.textContent.trim()).filter(t => t).join('\n');
  }

  const specs = {};
  const specLines = fullDesc.split('\n');
  specLines.forEach(line => {
    if (line.includes(':')) {
      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();
      if (key && value && !key.startsWith('*')) {
        specs[key.trim()] = value;
      }
    }
  });

  return {
    nome: name,
    descricao: shortDesc,
    especificacoes: specs
  };
};

(async () => {
  try {
    const urls = [
      'https://audioleader.com.br/produto/cm-800-usb/',
      'https://audioleader.com.br/produto/ca-800/',
      'https://audioleader.com.br/produto/al-1200-sub/',
      'https://audioleader.com.br/produto/ca-600/'
    ];

    const products = [];

    for (let url of urls) {
      console.error(`Fetching: ${url}`);
      const productHtml = await fetchPage(url);
      const productDom = new JSDOM(productHtml);
      const productDoc = productDom.window.document;

      const productData = extractProductData(productDoc);
      products.push(productData);

      await new Promise(resolve => setTimeout(resolve, 500));
    }

    console.log(JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();
