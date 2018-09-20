/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isInfinite method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isInfinite, isFinite, isInfiniteNegative, isInfinitePositive } from '../../../../sources/cores/numbers/isInfinite'

function isInfiniteUnits () {

    describe( 'isInfinite()', () => {

        it( 'should return true only when the value is an infinite number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeInfinity', 'positiveInfinity' ]

                    for ( let key in dataSet ) {

                        const result = isInfinite( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isInfinite( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isInfinitePositive()', () => {

        it( 'should return true only when the value is a positive infinite number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {

                        const result = isInfinitePositive( dataSet[ key ] )
                        if ( key === 'positiveInfinity' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isInfinitePositive( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isInfiniteNegative()', () => {

        it( 'should return true only when the value is a negative infinite number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {

                        const result = isInfiniteNegative( dataSet[ key ] )
                        if ( key === 'negativeInfinity' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isInfiniteNegative( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isFinite()', () => {

        it( 'should return true only when the value is a finite number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeInfinity', 'nan', 'positiveInfinity' ]

                    for ( let key in dataSet ) {

                        const result = isFinite( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isFinite( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isInfiniteUnits }
