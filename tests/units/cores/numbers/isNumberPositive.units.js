/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNumberPositive method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNumberPositive } from '../../../../sources/cores/numbers/isNumberPositive'

function isNumberPositiveUnits () {

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
                            console.log( `isNumberPositive => ${mapKey}.${key}(value: ${dataSet[ key ]})[type: ${typeof dataSet[ key ]}] expect to be true and got ${result}` )
                            expect( result ).to.be.true
                        } else {
                            console.log( `isNumberPositive => ${mapKey}.${key}(value: ${dataSet[ key ]})[type: ${typeof dataSet[ key ]}] expect to be false and got ${result}` )
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        console.log( `isNumberPositive => ${mapKey}.${key}(value: ${dataSet[ key ]})[type: ${typeof dataSet[ key ]}] expect to be true and got ${isNumberPositive( dataSet[ key ] )}` )
                        expect( isNumberPositive( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isNumberPositiveUnits }
