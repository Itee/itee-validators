/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isNotNull method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isNotNull } from '../../../../sources/cores/voids/isNotNull'

function isNotNullUnits () {

    describe( 'isNotNull()', () => {

        it( 'should return false only when the value is null', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {

                        const result = isNotNull( dataSet[ key ] )
                        if ( key === 'null' ) {
                            expect( result ).to.be.false
                        } else {
                            expect( result ).to.be.true
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotNull( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isNotNullUnits }
