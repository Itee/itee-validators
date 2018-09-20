/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/objects
 * @desc Export the units tests about isObject method.
 * @requires {@link module:sources/cores/objects}
 *
 */

/* global describe, expect, it */

import { isObject } from '../../../../sources/cores/objects/isObject'


function isObjectUnits () {

    describe( 'isObject()', () => {

        it( 'should return true only when the value is an object', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'objects' ) {

                    for ( let key in dataSet ) {
                        expect( isObject( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isObject( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isObjectUnits }
