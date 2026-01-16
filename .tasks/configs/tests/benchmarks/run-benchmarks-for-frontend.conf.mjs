import { default as localConfig } from '@itee/tasks/configs/tests/benchmarks/run-benchmarks-for-frontend.conf.mjs'

localConfig.files.push('!tests/benchmarks/file-system/**')

export default localConfig
