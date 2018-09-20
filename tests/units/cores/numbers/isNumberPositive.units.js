/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
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
                        'positiveInfinity',
                        'positiveMaxValue',
                        'positiveMinSafeInteger',
                        'positiveMinValue',
                        'positiveHexa',
                        'positivePow',
                        'positiveFloat',
                        'positiveInt',
                        'positiveNullFloat',
                        'positiveNullInt'
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

}

export { isNumberPositiveUnits }
