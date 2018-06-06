/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMaxNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMaxNegative } from '../../../../sources/cores/numbers'

function isMaxNegativeUnits () {

    describe( 'isMaxNegative()', () => {

        it( 'should be implemented', () => {

            expect( isMaxNegative( 0 ) ).to.be.true

        } )

    } )

}

export { isMaxNegativeUnits }
