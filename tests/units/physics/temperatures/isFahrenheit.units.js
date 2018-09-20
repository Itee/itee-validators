/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/physics/temperatures
 * @desc Export the units tests about isFahrenheit method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

/* global describe, expect, it */

import { isFahrenheit, isNotFahrenheit } from '../../../../sources/physics/temperatures/isFahrenheit'

function isFahrenheitUnits () {

    describe( 'isFahrenheit()', () => {

        it.skip( 'should be implemented', () => {

            expect( isFahrenheit(0) ).to.be.true

        } )

        it.skip( 'should be implemented', () => {

            expect( isNotFahrenheit(0) ).to.be.false

        } )

    } )

}

export { isFahrenheitUnits }
