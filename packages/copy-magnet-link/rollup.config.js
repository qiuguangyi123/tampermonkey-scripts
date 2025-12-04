import { createRollupConfig } from '@femm/shared-rollup-config'

import pkg from './package.json' with { type: 'json' }

export default createRollupConfig({ pkg })
