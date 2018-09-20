/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isBlankString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isBlankString, isNotBlankString } from '../../../../sources/cores/strings/isBlankString'

function isBlankStringUnits () {

    describe( 'isBlankString()', () => {

        it( 'should return true only when the value is a blank string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'blank', 'stringBlank' ]

                    for ( let key in dataSet ) {

                        const result = isBlankString( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
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

    describe( 'isNotBlankString()', () => {

        it( 'should return false only when the value is a blank string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'blank', 'stringBlank' ]

                    for ( let key in dataSet ) {

                        const result = isNotBlankString( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotBlankString( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isBlankStringUnits }
