this.Itee = this.Itee || {};
(function () {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function createDataSet() {

	    const voidDataSet = [
	        null,
	        undefined,
	        void(0)
	    ];

	    const booleanDataSet = [
	        true,
	        false
	    ];

	    const numericDataSet = [
	        Number.NEGATIVE_INFINITY,
	        -Number.MAX_VALUE,
	        Number.MIN_SAFE_INTEGER,
	        -Number.MIN_VALUE,
	        -0x123456,
	        -2e+2,
	        -1.0,
	        -1,
	        -0.0,
	        -0,
	        Number.NaN,
	        0,
	        0.0,
	        1,
	        1.0,
	        2e+2,
	        0x123456,
	        Number.MIN_VALUE,
	        Number.MAX_SAFE_INTEGER,
	        Number.MAX_VALUE,
	        Number.POSITIVE_INFINITY
	    ];

	    const stringDataSet = (() => {
	        'use strict';

	        const dataSet = [];

	        dataSet.push( '' );
	        dataSet.push( '      ' );

	        for ( let i = 0, m = voidDataSet.length ; i < m ; i++ ) {
	            dataSet.push( `${voidDataSet[ i ]}` );
	        }

	        for ( let j = 0, n = booleanDataSet.length ; j < n ; j++ ) {
	            dataSet.push( `${booleanDataSet[ j ]}` );
	        }

	        for ( let k = 0, o = numericDataSet.length ; k < o ; k++ ) {
	            dataSet.push( `${numericDataSet[ k ]}` );
	        }

	        dataSet.push( 'foobar' );

	        return dataSet

	    })();

	    const functionDataSet = [
	        function emptyFct () {},
	        () => {}
	    ];

	    const arrayDataSet = (() => {
	        'use strict';

	        const dataSet = [];

	        dataSet.push( [] );

	        for ( let i = 0, m = voidDataSet.length ; i < m ; i++ ) {
	            dataSet.push( [ voidDataSet[ i ] ] );
	        }
	        dataSet.push( voidDataSet );

	        for ( let j = 0, n = booleanDataSet.length ; j < n ; j++ ) {
	            dataSet.push( [ booleanDataSet[ j ] ] );
	        }
	        dataSet.push( booleanDataSet );

	        for ( let k = 0, o = numericDataSet.length ; k < o ; k++ ) {
	            dataSet.push( [ numericDataSet[ k ] ] );
	        }
	        dataSet.push( numericDataSet );

	        for ( let k = 0, o = functionDataSet.length ; k < o ; k++ ) {
	            dataSet.push( [ functionDataSet[ k ] ] );
	        }
	        dataSet.push( functionDataSet );

	        return dataSet

	    })();

	    const objectDataSet = [
	        {},
	        { null: null },
	        { undefined: undefined }
	    ];

	    return {
	        voids:     voidDataSet,
	        booleans:  booleanDataSet,
	        numbers:   numericDataSet,
	        strings:   stringDataSet,
	        functions: functionDataSet,
	        arrays:    arrayDataSet,
	        objects:   objectDataSet,
	    }

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is a boolean
	 * @param data
	 * @returns {boolean|*} true if data is a boolean, false otherwise.
	 */
	function isBoolean ( data ) {
	    return (typeof data === 'boolean')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * Check if given data is not a boolean
	 * @param data
	 * @returns {boolean|*} true if data is not a boolean, false otherwise.
	 */
	function isNotBoolean ( data ) {
	    return (typeof data !== 'boolean')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @class Todo...
	 * @classdesc Todo...
	 * @example Todo...
	 *
	 */

	/* eslint-env browser */

	//    ____  _        _
	//   / ___|| |_ _ __(_)_ __   __ _ ___
	//   \___ \| __| '__| | '_ \ / _` / __|
	//    ___) | |_| |  | | | | | (_| \__ \
	//   |____/ \__|_|  |_|_| |_|\__, |___/
	//                           |___/

	/**
	 * Check if given data is a string
	 * @param data
	 * @returns {boolean|*} true if data is a string, false otherwise.
	 */
	function isString ( data ) {
	    return (typeof data === 'string')
	}

	/**
	 * Check if given data is not a string
	 * @param data
	 * @returns {boolean|*} true if data is not a string, false otherwise.
	 */
	function isNotString ( data ) {
	    return (typeof data !== 'string')
	}

	// Alternative to
	//
	//  if( isString( data ) && isEmpty( data ) ) {
	//      //...foo
	//  } else {
	//      //...bar
	//  }
	//
	//  instead of
	//
	//  if( isEmptyString( data ) ) {
	//      //...foo
	//  } else {
	//      //...bar
	//  }
	//

	/**
	 * Check if given data is an empty string
	 * @param data
	 * @returns {boolean|*} true if data is an empty string, false otherwise.
	 */
	function isEmptyString ( data ) {

	    console.assert( isString( data ), 'Expect a string !' );

	    return (isString( data ) && data.length === 0)
	}

	/**
	 * Check if given data is not an empty string
	 * @param data
	 * @returns {boolean|*} true if data is not an empty string, false otherwise.
	 */
	function isNotEmptyString ( data ) {

	    if ( isNotString( data ) ) {
	        throw new TypeError( 'Expect a string !' )
	    }

	    return (data.length > 0)
	}

	function isNotEmptyString_ ( data ) {
	    return (isString( data ) && data.length > 0)
	}

	function isBlankString ( data ) {

	    if ( isEmptyString( data ) ) {
	        throw new TypeError( 'Expect a non empty string !' )
	    }

	    return ( !/\S/.test( data ) )
	}

	function isBlankString_ ( data ) {
	    return ( isNotEmptyString( data ) && !/\S/.test( data ) )
	}

	function isNotBlankString ( data ) {
	    return ( isNotEmptyString( data ) && /\S/.test( data ) )
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isBooleanUnits () {

	    describe( 'isBoolean()', () => {

	        it( 'should return false when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ 0 ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return false when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isBoolean( dataSet[ i ] ) ).to.be.false;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function isNotBooleanUnits () {

	    describe( 'isNotBoolean()', () => {

	        it( 'should return true when the value is a void', () => {

	            const dataSet = this._dataSet[ 'voids' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return false when the value is a boolean', () => {

	            const dataSet = this._dataSet[ 'booleans' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ 0 ] ) ).to.be.false;
	            }

	        } );

	        it( 'should return true when the value is a number', () => {

	            const dataSet = this._dataSet[ 'numbers' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a string', () => {

	            const dataSet = this._dataSet[ 'strings' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is a function', () => {

	            const dataSet = this._dataSet[ 'functions' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an array', () => {

	            const dataSet = this._dataSet[ 'arrays' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	        it( 'should return true when the value is an object', () => {

	            const dataSet = this._dataSet[ 'objects' ];
	            for ( let i = 0, n = dataSet.length ; i < n ; i++ ) {
	                expect( isNotBoolean( dataSet[ i ] ) ).to.be.true;
	            }

	        } );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function BooleansUnits () {

	    describe( 'Booleans', () => {

	        beforeEach( () => {

	            this._dataSet = createDataSet();

	        } );

	        afterEach( () => {

	            delete this._dataSet;

	        } );

	        isBooleanUnits.call( this );
	        isNotBooleanUnits.call( this );

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */
	//import { FunctionsUnits } from './functions/functions.units'
	//import { NumbersUnits } from './numbers/numbers.units'
	//import { ObjectsUnits } from './objects/objects.units'
	//import { StringsUnits } from './strings/strings.units'
	//import { SymbolsUnits } from './symbols/symbols.units'
	//import { VoidsUnits } from './voids/voids.units'

	function CoresUnits () {

	    describe( 'Cores', () => {

	//        ArraysUnits.call( this )
	        BooleansUnits.call( this );
	//        FunctionsUnits.call( this )
	//        NumbersUnits.call( this )
	//        ObjectsUnits.call( this )
	//        StringsUnits.call( this )
	//        SymbolsUnits.call( this )
	//        VoidsUnits.call( this )

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function MathsUnits () {

	    describe( 'Maths', () => {

	        console.log('MathsUnits');

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function TemperaturesUnits () {

	    describe( 'Temperatures', () => {

	        console.log('TemperaturesUnits');

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	function PhysicsUnits () {

	    describe( 'Physics', () => {

	        TemperaturesUnits.call(this);

	    } );

	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
	 *
	 * @file Todo
	 *
	 * @example Todo
	 *
	 */

	const root = typeof window !== 'undefined' ? window :
	    typeof global !== 'undefined' ? global :
	        Function( 'return this' )();

	describe( 'Itee#Validators', () => {

	    CoresUnits.call( root );
	    MathsUnits.call( root );
	    PhysicsUnits.call( root );

	} );

}());
