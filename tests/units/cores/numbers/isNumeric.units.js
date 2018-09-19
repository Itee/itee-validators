/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNumeric method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNumeric } from '../../../../sources/cores/numbers/isNumeric'

function isNumericUnits () {

    describe( 'isNumeric()', () => {

        it.skip( 'should be implemented', () => {

            expect( isNumeric( 0 ) ).to.be.true

        } )

    } )

}

export { isNumericUnits }
