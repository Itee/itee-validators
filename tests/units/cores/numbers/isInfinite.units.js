/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isInfinite method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isInfinite } from '../../../../sources/cores/numbers/isInfinite'

function isInfiniteUnits () {

    describe( 'isInfinite()', () => {

        it( 'should be implemented', () => {

            expect( isInfinite( 0 ) ).to.be.true

        } )

    } )

}

export { isInfiniteUnits }
