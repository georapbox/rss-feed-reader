import * as bootstrapStyleSheet from 'url:bootstrap/dist/css/bootstrap.css';
import * as mainStyleSheet from 'url:../../../src/css/main.css';

const styleURLs = [bootstrapStyleSheet, mainStyleSheet];

const styleSheets = [];

for (let i = 0; i < styleURLs.length; i += 1) {
  styleSheets.push(new CSSStyleSheet());
}

(async function () {
  const styles = await Promise.all(styleURLs.map(async styleURL => {
    const res = await fetch(styleURL);
    return res.text();
  }));

  for (let i = 0; i < styles.length; i += 1) {
    await styleSheets[i].replace(styles[i]);
  }

  document.body.style.visibility = 'visible';
}());

export { styleSheets };
