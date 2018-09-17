/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNumberNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNumberNegative } from '../../../../sources/cores/numbers/isNumberNegative'

function isNumberNegativeUnits () {

    describe( 'isNumberNegative()', () => {

        it( 'should be implemented', () => {

            expect( isNumberNegative( 0 ) ).to.be.true

        } )

    } )

}

export { isNumberNegativeUnits }
