import { default as localConfig } from '@itee/tasks/configs/tests/units/run-unit-tests-for-frontend.conf.mjs'

localConfig.files.push( '!tests/units/file-system/**' )

export default localConfig