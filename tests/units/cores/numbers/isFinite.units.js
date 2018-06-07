/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isFinite method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isFinite } from '../../../../sources/cores/numbers'

function isFiniteUnits () {

    describe( 'isFinite()', () => {

        it( 'should be implemented', () => {

            expect( isFinite( 0 ) ).to.be.true

        } )

    } )

}

export { isFiniteUnits }
