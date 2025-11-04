import { series }               from 'gulp'
import { bundleUnitTestsTask }  from '../.tests/unit-tests/bundle-unit-tests.task.mjs'
import { computeUnitTestsTask } from '../.tests/unit-tests/compute-unit-tests.task.mjs'

/**
 * @description Will compute and generate bundle for unit tests
 */
const buildUnitTestsTask       = series(
    computeUnitTestsTask,
    bundleUnitTestsTask,
)
buildUnitTestsTask.displayName = 'build-unit-tests'
buildUnitTestsTask.description = 'Will compute and generate bundle for unit tests.'
buildUnitTestsTask.flags       = null

export { buildUnitTestsTask }