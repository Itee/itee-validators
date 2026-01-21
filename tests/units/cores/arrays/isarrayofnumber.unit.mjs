import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isarrayofnumberNamespace from '../../../../sources/cores/arrays/isArrayOfNumber.js'

const Testing   = await getTestingPackage()

describe( 'isarrayofnumberUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isArrayOfNumber()', function () {

		it( 'should be bundlable', async function () {

			expect(isarrayofnumberNamespace.isArrayOfNumber).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isarrayofnumberNamespace.isArrayOfNumber( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isNotArrayOfNumber()', function () {

		it( 'should be bundlable', async function () {

			expect(isarrayofnumberNamespace.isNotArrayOfNumber).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isarrayofnumberNamespace.isNotArrayOfNumber( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
