import { series }                from 'gulp'
import { bundleBenchmarksTask }  from '../.tests/benchmarks/bundle-benchmarks.task.mjs'
import { computeBenchmarksTask } from '../.tests/benchmarks/compute-benchmarks.task.mjs'

/**
 * @description Will compute and generate bundle for benchmarks
 */
const buildBenchmarksTask       = series(
    computeBenchmarksTask,
    bundleBenchmarksTask,
)
buildBenchmarksTask.displayName = 'build-benchmarks'
buildBenchmarksTask.description = 'Will compute and generate bundle for benchmarks.'
buildBenchmarksTask.flags       = null

export { buildBenchmarksTask }