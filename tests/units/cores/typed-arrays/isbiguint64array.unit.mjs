import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isbiguint64arrayNamespace from '../../../../sources/cores/typed-arrays/isBigUint64Array.js'

describe( 'isbiguint64arrayUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isBigUint64Array()', function () {

		it( 'should be bundlable', async function () {

			expect(isbiguint64arrayNamespace.isBigUint64Array).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isbiguint64arrayNamespace.isBigUint64Array( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isNotBigUint64Array()', function () {

		it( 'should be bundlable', async function () {

			expect(isbiguint64arrayNamespace.isNotBigUint64Array).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isbiguint64arrayNamespace.isNotBigUint64Array( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
