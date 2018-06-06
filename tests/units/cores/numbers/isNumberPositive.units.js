/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNumberPositive method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNumberPositive } from '../../../../sources/cores/numbers'

function isNumberPositiveUnits () {

    describe( 'isNumberPositive()', () => {

        it( 'should be implemented', () => {

            expect( isNumberPositive( 0 ) ).to.be.true

        } )

    } )

}

export { isNumberPositiveUnits }
