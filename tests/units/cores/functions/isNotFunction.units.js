/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

const expect = require( 'chai' ).expect
const isNotFunction = require( '../../builds/itee-validators.cjs' ).isNotFunction

function isNotFunctionTest () {

    describe( 'isNotFunction()', () => {

        it( 'should return true when the value is a void', () => {

            const _dataSet = this.dataSet[ 'voids' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotFunction( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a boolean', () => {

            const _dataSet = this.dataSet[ 'booleans' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotFunction( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a number', () => {

            const _dataSet = this.dataSet[ 'numbers' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotFunction( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a string', () => {

            const _dataSet = this.dataSet[ 'strings' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotFunction( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is a function', () => {

            const _dataSet = this.dataSet[ 'functions' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotFunction( _dataSet[ i ] ) ).to.be.false
            }

        } )

        it( 'should return true when the value is an array', () => {

            const _dataSet = this.dataSet[ 'arrays' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotFunction( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is an object', () => {

            const _dataSet = this.dataSet[ 'objects' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotFunction( _dataSet[ i ] ) ).to.be.true
            }

        } )

    } )

}

module.exports = isNotFunctionTest
