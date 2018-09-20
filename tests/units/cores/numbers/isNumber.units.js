/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNumber method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNumber, isNumberPositive, isNumberNegative, isNotNumber, isInteger, isFloat } from '../../../../sources/cores/numbers/isNumber'

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

    describe( 'isNotNumber()', () => {

        it( 'should return false only when the value is a number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    for ( let key in dataSet ) {
                        expect( isNotNumber( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotNumber( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

    describe( 'isNumberPositive()', () => {

        it( 'should return true only when the value is a positive number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [
                        'positiveZero',
                        'positiveInt',
                        'positiveFloat',
                        'positivePow',
                        'positiveHexa',
                        'positiveMinValue',
                        'positiveMaxSafeInteger',
                        'positiveMaxValue',
                        'positiveInfinity'
                    ]

                    for ( let key in dataSet ) {

                        const result = isNumberPositive( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNumberPositive( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isNumberNegative()', () => {

        it( 'should return true only when the value is a negative number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [
                        'negativeInfinity',
                        'negativeMaxValue',
                        'negativeMinSafeInteger',
                        'negativeMinValue',
                        'negativeHexa',
                        'negativePow',
                        'negativeFloat',
                        'negativeInt',
                        'negativeNullFloat',
                        'negativeNullInt'
                    ]

                    for ( let key in dataSet ) {

                        const result = isNumberNegative( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNumberNegative( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isInteger()', () => {

        it( 'should return true only when the value is an integer number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [
                        'negativeMaxValue',
                        'negativeMinSafeInteger',
                        'negativeHexa',
                        'negativePow',
                        'negativeInt',
                        'negativeZero',
                        'positiveZero',
                        'positiveInt',
                        'positivePow',
                        'positiveHexa',
                        'positiveMaxSafeInteger',
                        'positiveMaxValue'
                    ]

                    for ( let key in dataSet ) {

                        const result = isInteger( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isInteger( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isFloat()', () => {

        it( 'should return true only when the value is a float number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMinValue', 'negativeFloat', 'positiveFloat', 'positiveMinValue' ]

                    for ( let key in dataSet ) {

                        const result = isFloat( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isFloat( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    //todo isNaN

}

export { isNumberUnits }
