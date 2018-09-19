/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNotNumber method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNotNumber } from '../../../../sources/cores/numbers/isNotNumber'

function isNotNumberUnits () {

    describe( 'isNotNumber()', () => {

        it.skip( 'should be implemented', () => {

            expect( isNotNumber( 0 ) ).to.be.true

        } )

    } )

}

export { isNotNumberUnits }
