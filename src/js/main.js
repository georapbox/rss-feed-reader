import '@georapbox/clipboard-copy-element/dist/clipboard-copy-defined.js';
import '@georapbox/web-share-element/dist/web-share-defined.js';
import '@georapbox/files-dropzone-element/dist/files-dropzone-defined.js';
import '@georapbox/a-tab-group/dist/a-tab-group.js';
import 'construct-style-sheets-polyfill/dist/adoptedStyleSheets.js';
import { styleSheets } from './helpers/styles.js';
import './components/add-feed.js';
import './components/feeds-list.js';
import './components/feed-reader.js';
import './components/modal-dialog.js';

document.adoptedStyleSheets = styleSheets;
