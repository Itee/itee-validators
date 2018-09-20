/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isEmptyString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import { isEmptyString } from '../../../../sources/cores/strings/isEmptyString'

function isEmptyStringUnits () {

    describe( 'isEmptyString()', () => {

        it( 'should return true only when the value is an empty string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    const allowed = [ 'empty', 'stringNull', 'stringEmpty' ]

                    for ( let key in dataSet ) {

                        const result = isEmptyString( dataSet[ key ] )
                        if ( allowed.includes( key ) ) {
                            expect( result ).to.be.true
                        } else {
                            expect( result ).to.be.false
                        }

                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isEmptyString( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

}

export { isEmptyStringUnits }
