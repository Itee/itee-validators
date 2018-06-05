/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

const expect = require( 'chai' ).expect
const isNotBlankString = require( '../../builds/itee-validators.cjs' ).isNotBlankString

function isNotBlankStringTest () {

    describe( 'isNotBlankString()', () => {

        it( 'should return true when the value is a void', () => {

            const _dataSet = this.dataSet[ 'voids' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotBlankString( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a boolean', () => {

            const _dataSet = this.dataSet[ 'booleans' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotBlankString( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is a number', () => {

            const _dataSet = this.dataSet[ 'numbers' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotBlankString( _dataSet[ i ] ) ).to.be.true
            }

        } )

        //

        it( 'should return false when the value is a blank string', () => {

            const index = this.dataSet[ 'strings' ].indexOf( '      ' )
            const _dataSet = this.dataSet[ 'strings' ].splice( index, 1 )[0]
            expect( isNotBlankString( _dataSet ) ).to.be.false

        } )

        it( 'should return true when the value is an other type of string', () => {

            const index = this.dataSet[ 'strings' ].indexOf( '      ' )
            this.dataSet[ 'strings' ].splice( index, 1 )
            const _dataSet = this.dataSet[ 'strings' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotBlankString( _dataSet[ i ] ) ).to.be.true
            }

        } )

        //

        it( 'should return true when the value is a function', () => {

            const _dataSet = this.dataSet[ 'functions' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotBlankString( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is an array', () => {

            const _dataSet = this.dataSet[ 'arrays' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotBlankString( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return true when the value is an object', () => {

            const _dataSet = this.dataSet[ 'objects' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotBlankString( _dataSet[ i ] ) ).to.be.true
            }

        } )

    } )

}

module.exports = isNotBlankStringTest
