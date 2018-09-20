/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/arrays
 * @desc Export the units tests about isNotArrayOfString method.
 * @requires {@link module:sources/cores/arrays}
 *
 */

/* global describe, expect, it */

import { isNotArrayOfString } from '../../../../sources/cores/arrays/isNotArrayOfString'

function isNotArrayOfStringUnits () {

    describe( 'isNotArrayOfString()', () => {

        it( 'should return false only when the value is a array of strings', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'arrays' ) {

                    for ( let key in dataSet ) {

                        const result = isNotArrayOfString( dataSet[ key ] )
                        if ( key === 'strings' ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotArrayOfString( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotArrayOfStringUnits }
