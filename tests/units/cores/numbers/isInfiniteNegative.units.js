/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isInfiniteNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isInfiniteNegative } from '../../../../sources/cores/numbers/isInfiniteNegative'

function isInfiniteNegativeUnits () {

    describe( 'isInfiniteNegative()', () => {

        it( 'should be implemented', () => {

            expect( isInfiniteNegative( 0 ) ).to.be.true

        } )

    } )

}

export { isInfiniteNegativeUnits }
