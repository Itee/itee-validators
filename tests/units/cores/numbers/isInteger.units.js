/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isInteger method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isInteger } from '../../../../sources/cores/numbers/isInteger'

function isIntegerUnits () {

    describe( 'isInteger()', () => {

        it.skip( 'should be implemented', () => {

            expect( isInteger( 0 ) ).to.be.true

        } )

    } )

}

export { isIntegerUnits }
