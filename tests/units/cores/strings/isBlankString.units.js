/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isBlankString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isBlankString } from '../../../../sources/cores/strings/isBlankString'


function isBlankStringUnits () {

    describe( 'isBlankString()', () => {

        it( 'should return true only when the value is a blank string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    for ( let key in dataSet ) {

                        const result = isBlankString( dataSet[ key ] )
                        if ( key === 'blank' || key === 'stringBlank' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isBlankString( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isBlankStringUnits }
