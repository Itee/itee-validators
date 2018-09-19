/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMinNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMinNegative } from '../../../../sources/cores/numbers/isMinNegative'

function isMinNegativeUnits () {

    describe( 'isMinNegative()', () => {

        it.skip( 'should be implemented', () => {

            expect( isMinNegative( 0 ) ).to.be.true

        } )

    } )

}

export { isMinNegativeUnits }
