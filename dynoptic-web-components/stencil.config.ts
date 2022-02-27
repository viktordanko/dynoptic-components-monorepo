import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'dynoptic',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'dynoptic-web-components',
      proxiesFile: '../dynoptic-react-components/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      //  generate the component(s) as a reusable library
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      // generate custom elements in a more optimized way for tree shaking
      type: 'dist-custom-elements',
    },
    {
      // auto-generate readme.md files in markdown
      type: 'docs-readme',
    },
    {
      // oriented for webapps and websites, hosted from an http server
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/global.scss'],
    }),
  ],
};
