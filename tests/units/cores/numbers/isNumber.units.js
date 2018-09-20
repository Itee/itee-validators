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

        it( 'should return true only when the value is a number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {
                        expect( isNumber( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNumber( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isNumberUnits }
