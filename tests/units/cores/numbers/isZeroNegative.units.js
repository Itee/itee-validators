/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isZeroNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isZeroNegative } from '../../../../sources/cores/numbers/isZeroNegative'

function isZeroNegativeUnits () {

    describe( 'isZeroNegative()', () => {

        it.skip( 'should be implemented', () => {

            expect( isZeroNegative( 0 ) ).to.be.true

        } )

    } )

}

export { isZeroNegativeUnits }
