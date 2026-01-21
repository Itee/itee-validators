import { default as localConfig } from '@itee/tasks/sources/tests/units/run-unit-tests-for-frontend.conf.mjs'

localConfig.files.push( '!tests/units/file-system/**' )

export default localConfig