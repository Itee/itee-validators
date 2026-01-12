import nodeResolve from '@rollup/plugin-node-resolve'
import cleanup     from 'rollup-plugin-cleanup'

const checkBundlingFromEsmBuildImportConf = {
    input:     null,
    external:  [ '' ],
    plugins:   [
        nodeResolve( {
            preferBuiltins: true
        } ),
        cleanup( {
            comments: 'all' // else remove __PURE__ declaration... -_-'
        } )
    ],
    onwarn:    ( {
        loc,
        frame,
        message
    } ) => {

        // Ignore some errors
        if ( message.includes( 'Circular dependency' ) ) { return }
        if ( message.includes( 'Generated an empty chunk' ) ) { return }

        if ( loc ) {
            process.stderr.write( `/!\\ ${ loc.file } (${ loc.line }:${ loc.column }) ${ frame } ${ message }\n` )
        } else {
            process.stderr.write( `/!\\ ${ message }\n` )
        }

    },
    treeshake: {
        moduleSideEffects:                true,
        annotations:                      true,
        correctVarValueBeforeDeclaration: true,
        propertyReadSideEffects:          true,
        tryCatchDeoptimization:           true,
        unknownGlobalSideEffects:         true
    },
    output:    {
        indent: '\t',
        format: 'esm',
        file:   null
    }
}

export { checkBundlingFromEsmBuildImportConf }