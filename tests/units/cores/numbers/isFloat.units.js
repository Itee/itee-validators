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

import { isFloat } from '../../../../sources/cores/numbers/isFloat'

function isFloatUnits () {

    describe( 'isFloat()', () => {

        it( 'should be implemented', () => {

            expect( isFloat( 0 ) ).to.be.true

        } )

    } )

}

export { isFloatUnits }
