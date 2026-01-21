import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isarrayofundefinedNamespace from '../../../../sources/cores/arrays/isArrayOfUndefined.js'

describe( 'isarrayofundefinedUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isArrayOfUndefined()', function () {

		it( 'should be bundlable', async function () {

			expect(isarrayofundefinedNamespace.isArrayOfUndefined).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isarrayofundefinedNamespace.isArrayOfUndefined( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isNotArrayOfUndefined()', function () {

		it( 'should be bundlable', async function () {

			expect(isarrayofundefinedNamespace.isNotArrayOfUndefined).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isarrayofundefinedNamespace.isNotArrayOfUndefined( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
