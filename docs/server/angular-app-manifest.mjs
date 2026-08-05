
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DS4X3TWS.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 900, hash: '1b92abe4a3960b26beb21101b48e24498b43051a893893d70323c334a2ba6197', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '698edbd3007e9f796a59c82af53162cd648678e81a44ed1a5e45d764dadeca5e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 86304, hash: 'd9e3830537a7c5e9c96cb6e9887ca3193005adc7ed0f43a95789f4262766b6fc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MSZOY2SU.css': {size: 270, hash: 'lqM9E0QQpvU', text: () => import('./assets-chunks/styles-MSZOY2SU_css.mjs').then(m => m.default)}
  },
};
