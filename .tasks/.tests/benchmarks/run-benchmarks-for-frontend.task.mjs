import { startTestRunner }   from '@web/test-runner'
import colors                from 'ansi-colors'
import log                   from 'fancy-log'
import {
    spawn,
    spawnSync
}                            from 'node:child_process'
import { default as config } from '../../configs/benchmarks.conf.mjs'

const { red } = colors

function spawnBenchmarksForFrontendTask( done ) {

    const runner = spawn( 'web-test-runner', [ '--config', './.tasks/configs/benchmarks.conf.mjs' ] )

    runner.stdout.on( 'data', data => {
        log( data.toString() )
    } )

    runner.stderr.on( 'data', data => {
        log( red( data.toString() ) )
    } )

    runner.on( 'error', err => {
        const errorMessage = red( err.toString().replace( 'Error: ', '' ) )
        done( errorMessage )
    } )

    runner.on( 'close', ( code ) => {
        const closeMessage = ( code ) ? red( `Runner exit with code: ${ code }` ) : undefined
        done( closeMessage )
    } )

}

function spawnSyncBenchmarksForFrontendTask( done ) {

    const command = spawnSync( 'web-test-runner', [ '--config', './.tasks/configs/benchmarks.conf.mjs' ] )

    if ( command.stdout ) {
        log( command.stdout.toString() )
    }

    if ( command.output ) {
        log( command.output.join( '\n' ) )
    }

    if ( command.stderr ) {
        const errorString = command.stderr.toString()
        log( red( errorString ) )
        done( errorString )
        return
    }

    if ( command.error ) {
        const errorString = command.error.message
        log( red( errorString ) )
        done( errorString )
        return
    }

    done()

}

function runBenchmarksForFrontendTask() {

    return new Promise( async ( resolve, reject ) => {

        const testRunner = await startTestRunner( {
            config:          config,
            readCliArgs:     false,
            readFileConfig:  false,
            autoExitProcess: false,
        } )

        if ( !testRunner ) {
            reject( red( 'Internal test runner error.' ) )
            return
        }

        // To ensure that testRunner exit event won't be used by other instance of test runner,
        // we need to be sure that current test runner is ended
        testRunner.on( 'finished', () => {
            testRunner.stop()
        } )

        testRunner.on( 'stopped', () => {
            resolve()
        } )

    } )

}

export { runBenchmarksForFrontendTask }