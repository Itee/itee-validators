/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isNotString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isNotString } from '../../../../sources/cores/strings/isNotString'

function isNotStringUnits () {

    describe( 'isNotString()', () => {

        it( 'should return false only when the value is a string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    for ( let key in dataSet ) {
                        expect( isNotString( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotString( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotStringUnits }
