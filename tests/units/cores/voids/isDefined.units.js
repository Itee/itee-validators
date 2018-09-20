/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isDefined method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isDefined } from '../../../../sources/cores/voids/isDefined'


function isDefinedUnits () {

    describe( 'isDefined()', () => {

        it( 'should return false only when the value is null or undefined', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'voids' ) {

                    for ( let key in dataSet ) {
                        expect( isDefined( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isDefined( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isDefinedUnits }
