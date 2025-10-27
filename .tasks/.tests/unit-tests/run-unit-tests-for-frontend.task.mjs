import { startTestRunner }   from '@web/test-runner'
import colors                from 'ansi-colors'
import { default as config } from '../../configs/units.conf.mjs'

const { red } = colors

function runUnitTestsForFrontendTask() {

    return new Promise( async ( resolve, reject ) => {

        const testRunner = await startTestRunner( {
            config:         config,
            readCliArgs:    false,
            readFileConfig: false,
        } )

        if ( !testRunner ) {
            reject( red( 'Internal test runner error.' ) )
            return
        }

        testRunner.on( 'finished', resolve )

    } )

}

export { runUnitTestsForFrontendTask }