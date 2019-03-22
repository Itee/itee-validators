/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/strings
 * @desc Export the units tests about isString method.
 * @requires {@link module:sources/cores/strings}
 *
 */

/* global describe, expect, it */

import {
    isNotString,
    isString
} from '../../../../sources/cores/strings/isString'

function isStringUnits () {

    describe( 'isString()', () => {

        it( 'should return true only when the value is a string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    for ( let key in dataSet ) {
                        expect( isString( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isString( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isNotString()', () => {

        it( 'should return false only when the value is a string', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'strings' ) {

                    for ( let key in dataSet ) {
                        expect( isNotString( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotString( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isStringUnits }
