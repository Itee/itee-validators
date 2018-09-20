/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNumberNegative method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isNumberNegative } from '../../../../sources/cores/numbers/isNumberNegative'


function isNumberNegativeUnits () {

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

}

export { isNumberNegativeUnits }
