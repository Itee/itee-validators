import { series }              from 'gulp'
import { buildBenchmarksTask } from './build-benchmarks.task.mjs'
import { buildUnitTestsTask }  from './build-unit-tests.task.mjs'

/**
 * @method npm run build-test
 * @global
 * @description Will build all tests.
 */
const buildTestsTask       = series(
    buildBenchmarksTask,
    buildUnitTestsTask,
)
buildTestsTask.displayName = 'build-tests'
buildTestsTask.description = 'Will build all tests.'
buildTestsTask.flags       = null

export { buildTestsTask }