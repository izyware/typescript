import { newChain } from 'izy-proxy/index';

const modtask = () => {};
modtask.bootstrap = ({ serviceComposeJSON, entrypoint }) => {
	const verbose = {
		bootstrap: false
	};
	try {
		const { __chainProcessorConfig } = serviceComposeJSON;
		if (verbose.bootstrap) console.log('[bootstrap] boostrap module: ', module.id);
		if (verbose.bootstrap) console.log('[bootstrap] entrypoint: ', entrypoint);
		newChain({
			chainItems: [
				['//inline/service?compose', serviceComposeJSON],
				[entrypoint],
				// ['session.cacheWhoami'],
				['outcome', { success: true }]
			],
			// forceRequireOnLoadFromFile: true,
			__chainProcessorConfig,
			// webpack module.id will be ./src/entrypoint.ts
			callerContextModule: { filename: module.id }
		}, (outcome) => {
			if (!outcome.success) {
				return console.log('[bootstrap] error', outcome.reason);
			}
			if (verbose.bootstrap) console.log('[bootstrap] successful');
		});
	} catch(e) {
		if (verbose.bootstrap) console.log('[bootstrap] failed', e);
	}
};

import __izyTypeScriptImportDependencyNull1 from 'izy-proxy/features/v2/chain/main';
if (__izyTypeScriptImportDependencyNull1.__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull2 from 'izy-proxy/features/v2/chain/processors/basic';
if (__izyTypeScriptImportDependencyNull2.__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull3 from 'izy-proxy/features/v2/chain/processors/izynode';
if (__izyTypeScriptImportDependencyNull3.__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull4 from 'izy-proxy/features/v2/chain/processors/import';
if (__izyTypeScriptImportDependencyNull4.__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull5 from 'izy-proxy/features/v2/chain/processors/runpkg';
if (__izyTypeScriptImportDependencyNull5.__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull6 from 'izy-proxy/service';
if (__izyTypeScriptImportDependencyNull6.__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull7 from 'izy-proxy/features/v2/chain/parser';
if (__izyTypeScriptImportDependencyNull7.__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull9 from 'izy-proxy/features/v2/session/main';
if ((__izyTypeScriptImportDependencyNull9 as any).__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull10 from 'izy-proxy/features/v2/pkg/run';
if ((__izyTypeScriptImportDependencyNull10 as any).__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull11 from 'izy-proxy/service';
if ((__izyTypeScriptImportDependencyNull11 as any).__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull12 from 'izy-proxy/json';
if ((__izyTypeScriptImportDependencyNull12 as any).__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull13 from 'izy-proxy/lib/globals';
if ((__izyTypeScriptImportDependencyNull13 as any).__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull14 from 'izy-proxy/lib/monitoring';
if ((__izyTypeScriptImportDependencyNull14 as any).__nonExistentProperty) console.log(1);

import __izyTypeScriptImportDependencyNull15 from 'izy-proxy/features/v2/pkg/main';
if ((__izyTypeScriptImportDependencyNull15 as any).__nonExistentProperty) console.log(1);

export default modtask;
