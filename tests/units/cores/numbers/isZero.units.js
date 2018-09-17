/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isZero method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isZero } from '../../../../sources/cores/numbers/isZero'

function isZeroUnits () {

    describe( 'isZero()', () => {

        it( 'should be implemented', () => {

            expect( isZero( 0 ) ).to.be.true

        } )

    } )

}

export { isZeroUnits }
