/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isInfinitePositive method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isInfinitePositive } from '../../../../sources/cores/numbers'

function isInfinitePositiveUnits () {

    describe( 'isInfinitePositive()', () => {

        it( 'should be implemented', () => {

            expect( isInfinitePositive( 0 ) ).to.be.true

        } )

    } )

}

export { isInfinitePositiveUnits }
