/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/physics/temperatures
 * @desc Export the units tests about isNotKelvin method.
 * @requires {@link module:sources/physics/temperatures}
 *
 */

/* global describe, expect, it */

import { isNotKelvin } from '../../../../sources/physics/temperatures'

function isNotKelvinUnits () {

    describe( 'isNotKelvin()', () => {

        it( 'should be implemented', () => {

            expect( isNotKelvin( [] ) ).to.be.true

        } )

    } )

}

export { isNotKelvinUnits }