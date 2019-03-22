/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isEmptyString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import {
    isEmptyString,
    isNotEmptyString
} from '../../../../sources/cores/strings/isEmptyString'

function isEmptyStringUnits () {

    describe( 'isEmptyString()', () => {

        it( 'should return true only when the value is an empty string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ]

                    for ( let key in dataSet ) {

                        const result = isEmptyString( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isEmptyString( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isNotEmptyString()', () => {

        it( 'should return false only when the value is an empty string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ]

                    for ( let key in dataSet ) {

                        const result = isNotEmptyString( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotEmptyString( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isEmptyStringUnits }
