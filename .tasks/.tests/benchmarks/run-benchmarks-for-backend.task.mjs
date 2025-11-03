import colors         from 'ansi-colors'
import log            from 'fancy-log'
import { existsSync } from 'fs'
import { join }       from 'path'
import {
    packageName,
    packageTestsBenchmarksDirectory
}                     from '../../_utils.mjs'

const {
          red,
          yellow
      } = colors

async function runBenchmarksForBackendTask( done ) {

    const benchesPath = join( packageTestsBenchmarksDirectory, `/builds/${ packageName }.benchmarks.cjs.js` )
    if ( !existsSync( benchesPath ) ) {
        log( yellow( `${ benchesPath } does not exist, skip backend benchmarks...` ) )
        done()
        return
    }

    try {
        await import(benchesPath)
        done()
    } catch ( error ) {
        done( red( error ) )
    }

}

export { runBenchmarksForBackendTask }