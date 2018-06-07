/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMinSafeInteger method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMinSafeInteger } from '../../../../sources/cores/numbers'

function isMinSafeIntegerUnits () {

    describe( 'isMinSafeInteger()', () => {

        it( 'should be implemented', () => {

            expect( isMinSafeInteger( 0 ) ).to.be.true

        } )

    } )

}

export { isMinSafeIntegerUnits }
