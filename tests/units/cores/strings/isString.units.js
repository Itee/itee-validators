/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isString } from '../../../../sources/cores/strings/isString'

function isStringUnits () {

    describe( 'isString()', () => {

        it( 'should return true only when the value is a string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    for ( let key in dataSet ) {
                        expect( isString( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isString( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isStringUnits }
