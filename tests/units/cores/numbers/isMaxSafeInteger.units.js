/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMaxSafeInteger method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMaxSafeInteger } from '../../../../sources/cores/numbers/isMaxSafeInteger'

function isMaxSafeIntegerUnits () {

    describe( 'isMaxSafeInteger()', () => {

        it( 'should be implemented', () => {

            expect( isMaxSafeInteger( 0 ) ).to.be.true

        } )

    } )

}

export { isMaxSafeIntegerUnits }
