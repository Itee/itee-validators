/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNotNumeric method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNotNumeric } from '../../../../sources/cores/numbers/isNotNumeric'

function isNotNumericUnits () {

    describe( 'isNotNumeric()', () => {

        it.skip( 'should be implemented', () => {

            expect( isNotNumeric( 0 ) ).to.be.true

        } )

    } )

}

export { isNotNumericUnits }
