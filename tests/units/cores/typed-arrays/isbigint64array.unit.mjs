import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isbigint64arrayNamespace from '../../../../sources/cores/typed-arrays/isBigInt64Array.js'

const Testing   = await getTestingPackage()

describe( 'isbigint64arrayUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isBigInt64Array()', function () {

		it( 'should be bundlable', async function () {

			expect(isbigint64arrayNamespace.isBigInt64Array).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isbigint64arrayNamespace.isBigInt64Array( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isNotBigInt64Array()', function () {

		it( 'should be bundlable', async function () {

			expect(isbigint64arrayNamespace.isNotBigInt64Array).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isbigint64arrayNamespace.isNotBigInt64Array( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
