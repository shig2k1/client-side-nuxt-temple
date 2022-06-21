import { defineConfig, mergeConfig } from 'vite';

export default ({ command }) => {
	const isBuild = false //env.command === 'build';
	const devOnlyResolve = isBuild ? {} : {
		'@airgap/beacon-dapp': `./vendor/walletbeacon.min.js`,
		//
	}
	return defineConfig({
      optimizeDeps: {
				esbuildOptions: {
					define: {
						global: 'globalThis'
					}
				}
			},
		  resolve: {
			  alias: {
          ...devOnlyResolve,
				  // polyfills
					//'lodash': './vendor/lodash.min.js',
				  'readable-stream': 'vite-compatible-readable-stream',
	        stream: 'vite-compatible-readable-stream',
			  },
		  },
		  // ... 
	});
}