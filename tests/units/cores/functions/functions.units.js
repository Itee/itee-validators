/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

import { createDataSet } from '../../../TestsUtils'
import {  } from './isFunction.units'

const isFunctionUnits    = require( './isFunction.units' )
const isNotFunctionUnits = require( './isNotFunction.units' )

function FunctionsTests () {

    describe( 'Functions', () => {

        beforeEach( () => {

            this.dataSet = createDataSet()

        } )

        afterEach( () => {

            delete this.dataSet

        } )

        isFunctionUnits()
        isNotFunctionUnits()

    } )

}

module.exports = FunctionsTests
