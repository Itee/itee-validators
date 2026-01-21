import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isuint8clampedarrayNamespace from '../../../../sources/cores/typed-arrays/isUint8ClampedArray.js'

const Testing   = await getTestingPackage()

describe( 'isuint8clampedarrayUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isUint8ClampedArray()', function () {

		it( 'should be bundlable', async function () {

			expect(isuint8clampedarrayNamespace.isUint8ClampedArray).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isuint8clampedarrayNamespace.isUint8ClampedArray( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isNotUint8ClampedArray()', function () {

		it( 'should be bundlable', async function () {

			expect(isuint8clampedarrayNamespace.isNotUint8ClampedArray).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isuint8clampedarrayNamespace.isNotUint8ClampedArray( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
