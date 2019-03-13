/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isMaxSafeInteger method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import {
    isMaxSafeInteger,
    isMinSafeInteger
} from '../../../../sources/cores/numbers/isSafeInteger'

function isMaxSafeIntegerUnits () {

    describe( 'isMaxSafeInteger()', () => {

        it( 'should return true only when the value is a the max safe integer value', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'positiveMaxSafeInteger' ]

                    for ( let key in dataSet ) {

                        const result = isMaxSafeInteger( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isMaxSafeInteger( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isMinSafeInteger()', () => {

        it( 'should return true only when the value is a the min safe integer value', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMinSafeInteger' ]

                    for ( let key in dataSet ) {

                        const result = isMinSafeInteger( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isMinSafeInteger( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isMaxSafeIntegerUnits }
