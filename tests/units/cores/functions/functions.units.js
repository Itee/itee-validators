/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
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
