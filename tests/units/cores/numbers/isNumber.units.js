/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNumber method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNumber } from '../../../../sources/cores/numbers/isNumber'

function isNumberUnits () {

    describe( 'isNumber()', () => {

        it.skip( 'should be implemented', () => {

            expect( isNumber( 0 ) ).to.be.true

        } )

    } )

}

export { isNumberUnits }
