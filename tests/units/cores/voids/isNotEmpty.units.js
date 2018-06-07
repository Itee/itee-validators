/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 * @module tests/cores/voids
 * @desc Export the units tests about isNotEmpty method.
 * @requires {@link module:sources/cores/voids}
 */

/* global describe, expect, it */

import { isNotEmpty } from '../../../../sources/cores/voids'

function isNotEmptyUnits () {

    describe( 'isNotEmpty()', () => {

        // Specific dataset

        it( 'should return true when the value is null', () => {

            const _dataSet = this.dataSet[ 'voids' ]
            expect( isNotEmpty( _dataSet[ 0 ] ) ).to.be.true

        } )

        it( 'should return false when the value is undefined', () => {

            const _dataSet = this.dataSet[ 'voids' ]
            expect( isNotEmpty( _dataSet[ 1 ] ) ).to.be.false

        } )

        it( 'should return false when the value is void(0)', () => {

            const _dataSet = this.dataSet[ 'voids' ]
            expect( isNotEmpty( _dataSet[ 2 ] ) ).to.be.false

        } )

        // Global dataset

        it( 'should return false when the value is a boolean', () => {

            const _dataSet = this.dataSet[ 'booleans' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a number', () => {

            const _dataSet = this.dataSet[ 'numbers' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a string', () => {

            const _dataSet = this.dataSet[ 'strings' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is a function', () => {

            const _dataSet = this.dataSet[ 'functions' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an array', () => {

            const _dataSet = this.dataSet[ 'arrays' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return false when the value is an object', () => {

            const _dataSet = this.dataSet[ 'objects' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotEmpty( _dataSet[ i ] ) ).to.be.false
            }

        } )

    } )

}

export { isNotEmptyUnits }