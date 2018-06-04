/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { isString } from '../../../../builds/itee-validators.esm'
import { createDataSet } from '../../../TestsUtils'

function isString_0 ( val ) {
    return (typeof val === 'string' || val instanceof String)
}

function isString_1 ( val ) {
    return (typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call( val ) === '[object String]'))
}

function isString_2 ( val ) {
    return (Object.prototype.toString.call( val ) === "[object String]")
}

function isString_3 ( val ) {
    return (val !== null && val !== undefined && val.constructor === String)
}

function isString_4 ( val ) {
    return (val === val + '')
}

export default new Benchmark
    .Suite( 'Itee#Validators#Strings#isString()' )
    .add( 'typeof', () => {

        const _dataSet = createDataSet()
        for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
            isString( _dataSet[ i ] )
        }

    } )
    .add( 'typeof || instanceof', () => {

        const _dataSet = createDataSet()
        for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
            isString_0( _dataSet[ i ] )
        }

    } )
    .add( 'Object.prototype.toString', () => {

        const _dataSet = createDataSet()
        for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
            isString_1( _dataSet[ i ] )
        }

    } )
    .add( 'constructor', () => {

        const _dataSet = createDataSet()
        for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
            isString_2( _dataSet[ i ] )
        }

    } )
    .add( 'typeof || !!val || toString', () => {

        const _dataSet = createDataSet()
        for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
            isString_3( _dataSet[ i ] )
        }

    } )
    .add( 'val+""', () => {

        const _dataSet = createDataSet()
        for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
            isString_4( _dataSet[ i ] )
        }

    } )
