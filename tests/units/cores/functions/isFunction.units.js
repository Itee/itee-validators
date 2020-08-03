/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @module tests/cores/functions
 * @desc Export the units tests about isFunction method.
 * @requires {@link module:sources/cores/functions}
 *
 */

/* global describe, expect, it */

import {
    isFunction,
    isNotFunction
} from '../../../../sources/cores/functions/isFunction'
import { expect } from 'chai'

function isFunctionUnits () {

    describe( 'isFunction()', () => {

        it( 'should return true only when the value is a functions', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'functions' ) {

                    for ( let key in dataSet ) {
                        expect( isFunction( dataSet[ key ] ) ).to.be.true
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isFunction( dataSet[ key ] ) ).to.be.false
                    }

                }

            }

        } )

    } )

    describe( 'isNotFunction()', () => {

        it( 'should return false only when the value is a functions', () => {

            const dataMap = this._dataMap
            for ( let mapKey in dataMap ) {

                const dataSet = dataMap[ mapKey ]
                if ( mapKey === 'functions' ) {

                    for ( let key in dataSet ) {
                        expect( isNotFunction( dataSet[ key ] ) ).to.be.false
                    }

                } else {

                    for ( let key in dataSet ) {
                        expect( isNotFunction( dataSet[ key ] ) ).to.be.true
                    }

                }

            }

        } )

    } )

}

export { isFunctionUnits }
