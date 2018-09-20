/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/numbers
 * @desc Export the units tests about isNumber method.
 * @requires {@link module:sources/cores/numbers}
 *
 */

/* global describe, expect, it */

import { isFloat } from '../../../../sources/cores/numbers/isFloat'

function isFloatUnits () {

    describe( 'isFloat()', () => {

        it( 'should return true only when the value is a float number', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'numbers' ) {

                    const allowed = [ 'negativeMaxValue', 'negativeMinValue', 'negativeFloat', 'negativeNullFloat', 'positiveNullFloat', 'positiveFloat', 'positiveMinValue', 'positiveMaxValue' ]

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

}

export { isFloatUnits }
