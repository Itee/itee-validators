/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/physics/temperatures
 * @desc Export the units tests about isCelsius method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

/* global describe, expect, it */

import { isCelsius } from '../../../../sources/physics/temperatures'

function isCelsiusUnits () {

    describe( 'isCelsius()', () => {

        it( 'should be implemented', () => {

            expect( true ).to.be.true

        } )

    } )

}

export { isCelsiusUnits }
