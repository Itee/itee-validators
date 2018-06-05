/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

const expect     = require( 'chai' ).expect
const Validators = require( '../../builds/itee-validators.cjs' )
const isNotNull  = Validators.isNotNull

function isNotNullTest () {

    describe( 'isNotNull()', () => {

        it( 'should return true when the value is null', () => {

            const _dataSet = this.dataSet[ 'voids' ]
            expect( isNotNull( _dataSet[ 0 ] ) ).to.be.false

        } )

        it( 'should return false when the value is undefined', () => {

            const _dataSet = this.dataSet[ 'voids' ]
            expect( isNotNull( _dataSet[ 1 ] ) ).to.be.true

        } )

        it( 'should return false when the value is void(0)', () => {

            const _dataSet = this.dataSet[ 'voids' ]
            expect( isNotNull( _dataSet[ 2 ] ) ).to.be.true

        } )

        //

        it( 'should return false when the value is a boolean', () => {

            const _dataSet = this.dataSet[ 'booleans' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotNull( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is a number', () => {

            const _dataSet = this.dataSet[ 'numbers' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotNull( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is a string', () => {

            const _dataSet = this.dataSet[ 'strings' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotNull( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is a function', () => {

            const _dataSet = this.dataSet[ 'functions' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotNull( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is an array', () => {

            const _dataSet = this.dataSet[ 'arrays' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotNull( _dataSet[ i ] ) ).to.be.true
            }

        } )

        it( 'should return false when the value is an object', () => {

            const _dataSet = this.dataSet[ 'objects' ]
            for ( let i = 0, n = _dataSet.length ; i < n ; i++ ) {
                expect( isNotNull( _dataSet[ i ] ) ).to.be.true
            }

        } )

    } )

}

module.exports = isNotNullTest
