/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isNull method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isNull } from '../../../../sources/cores/voids/isNull'


function isNullUnits () {

    describe( 'isNull()', () => {

        it( 'should return true only when the value is null', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isNull( dataSet[ key ] )
                        if ( key === 'null' ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNull( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isNullUnits }
