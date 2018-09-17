/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMaxPositive method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isMaxPositive } from '../../../../sources/cores/numbers/isMaxPositive'

function isMaxPositiveUnits () {

    describe( 'isMaxPositive()', () => {

        it( 'should be implemented', () => {

            expect( isMaxPositive( 0 ) ).to.be.true

        } )

    } )

}

export { isMaxPositiveUnits }
