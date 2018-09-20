/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isInteger method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isInteger } from '../../../../sources/cores/numbers/isInteger'


function isIntegerUnits () {

    describe( 'isInteger()', () => {

        it( 'should return true only when the value is an integer number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [
                        'negativeMinSafeInteger',
                        'negativeHexa',
                        'negativePow',
                        'negativeInt',
                        'negativeNullInt',
                        'positiveNullInt',
                        'positiveInt',
                        'positivePow',
                        'positiveHexa',
                        'positiveMaxSafeInteger'
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

}

export { isIntegerUnits }
