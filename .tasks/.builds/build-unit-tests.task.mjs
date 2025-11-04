import { series }                    from 'gulp'
import { buildUnitTestsBackendTask } from '../.tests/unit-tests/build-unit-tests-backend.task.mjs'
import { computeUnitTestsTask }      from '../.tests/unit-tests/compute-unit-tests.task.mjs'

/**
 * @description Will compute and generate bundle for unit tests
 */
const buildUnitTestsTask       = series(
    computeUnitTestsTask,
    buildUnitTestsBackendTask,
)
buildUnitTestsTask.displayName = 'build-unit-tests'
buildUnitTestsTask.description = 'Will compute and generate bundle for unit tests.'
buildUnitTestsTask.flags       = null

export { buildUnitTestsTask }