/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/physics/temperatures
 * @desc Export the units tests about isNotCelsius method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

/* global describe, expect, it */

import { isNotCelsius } from '../../../../sources/physics/temperatures'

function isNotCelsiusUnits () {

    describe( 'isNotCelsius()', () => {

        it( 'should be implemented', () => {

            expect( isNotCelsius( [] ) ).to.be.true

        } )

    } )

}

export { isNotCelsiusUnits }
