/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMinPositive method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMinPositive } from '../../../../sources/cores/numbers'

function isMinPositiveUnits () {

    describe( 'isMinPositive()', () => {

        it( 'should be implemented', () => {

            expect( isMinPositive( 0 ) ).to.be.true

        } )

    } )

}

export { isMinPositiveUnits }
