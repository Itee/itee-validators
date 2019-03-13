/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/physics/temperatures
 * @desc Export the units tests about isCelsius method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

/* global describe, expect, it */

import {
    isCelsius,
    isNotCelsius
} from '../../../../sources/physics/temperatures/isCelsius'

function isCelsiusUnits () {

    describe( 'isCelsius()', () => {

        it.skip( 'should be implemented', () => {

            expect( isCelsius( 0 ) ).to.be.true

        } )

        it.skip( 'should be implemented', () => {

            expect( isNotCelsius( 0 ) ).to.be.false

        } )

    } )

}

export { isCelsiusUnits }
