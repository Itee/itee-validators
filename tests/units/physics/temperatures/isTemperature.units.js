/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/physics/temperatures
 * @desc Export the units tests about isTemperature method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

/* global describe, expect, it */

import {
    isNotTemperature,
    isTemperature
} from '../../../../sources/physics/temperatures/isTemperature'

function isTemperatureUnits () {

    describe( 'isTemperature()', () => {

        it.skip( 'should be implemented', () => {

            expect( isTemperature( 0 ) ).to.be.true

        } )

        it.skip( 'should be implemented', () => {

            expect( isNotTemperature( 0 ) ).to.be.false

        } )

    } )

}

export { isTemperatureUnits }
