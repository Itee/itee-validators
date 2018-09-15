this.Itee = this.Itee || {};
(function () {
	'use strict';

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/booleans
	 * @description Export the validation methods about booleans
	 *
	 */

	/**
	 * Check if given data is a boolean
	 *
	 * @param data {any} The data to check against the booleaness
	 * @returns {boolean} true if data is a boolean, false otherwise.
	 */
	function isBoolean ( data ) {
	    return (typeof data === 'boolean')
	}

	// #if IS_REMOVE
	function isBoolean_alt ( value ) {

	    return typeof value === 'boolean' || (typeof value === 'object' && value !== null && typeof value.valueOf() === 'boolean')

	}
	// #endif

	/**
	 * Check if given data is not a boolean
	 *
	 * @param data {any} The data to check against the booleaness
	 * @returns {boolean} true if data is not a boolean, false otherwise.
	 */
	function isNotBoolean ( data ) {
	    return (typeof data !== 'boolean')
	}

	// #if IS_REMOVE
	function isNotBoolean_negbase ( data ) {
	    return !isBoolean( data )
	}
	// #endif

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */


	suite( 'isBoolean', () => {

	    benchmark( 'isBoolean()', Itee.TestsUtils.iterateOverDataMap( isBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isBoolean_alt()', Itee.TestsUtils.iterateOverDataMap( isBoolean_alt ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */


	suite( 'isNotBoolean', () => {

	    benchmark( 'isNotBoolean()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isNotBoolean_negbase()', Itee.TestsUtils.iterateOverDataMap( isNotBoolean_negbase ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 * @module sources/cores/strings
	 * @description Export the validation methods about strings
	 *
	 */

	/**
	 * Check if given data is a string
	 *
	 * @param data {any} The data to check against the string type
	 * @returns {boolean} true if data is a string, false otherwise.
	 */
	function isString ( data ) {
	    return (typeof data === 'string' || data instanceof String)
	}

	// #if IS_REMOVE
	function isString_0 ( val ) {
	    return (typeof val === 'string')
	}

	function isString_1 ( val ) {
	    return (typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call( val ) === '[object String]'))
	}

	function isString_2 ( val ) {
	    return (Object.prototype.toString.call( val ) === '[object String]')
	}

	function isString_3 ( val ) {
	    return (val !== null && val !== undefined && val.constructor === String)
	}

	function isString_4 ( val ) {
	    return (val === val + '')
	}

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */


	suite( 'isString', () => {

	    benchmark( 'isString()', Itee.TestsUtils.iterateOverDataMap( isString ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_0()', Itee.TestsUtils.iterateOverDataMap( isString_0 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_1()', Itee.TestsUtils.iterateOverDataMap( isString_1 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_2()', Itee.TestsUtils.iterateOverDataMap( isString_2 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_3()', Itee.TestsUtils.iterateOverDataMap( isString_3 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );
	    benchmark( 'isString_4()', Itee.TestsUtils.iterateOverDataMap( isString_4 ), Itee.TestsUtils.createDataMapBenchmarkOptions() );

	} );

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

	/**
	 * @author [Tristan Valcke]{@link https://github.com/Itee}
	 * @license [MIT]{@link https://opensource.org/licenses/MIT}
	 *
	 */

}());
