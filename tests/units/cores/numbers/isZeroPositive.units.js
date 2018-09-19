/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isZeroPositive method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isZeroPositive } from '../../../../sources/cores/numbers/isZeroPositive'

function isZeroPositiveUnits () {

    describe( 'isZeroPositive()', () => {

        it.skip( 'should be implemented', () => {

            expect( isZeroPositive( 0 ) ).to.be.true

        } )

    } )

}

export { isZeroPositiveUnits }
