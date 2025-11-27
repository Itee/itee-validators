import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isValidBlockDevicePathNamespace from '../../../../sources/file-system/block-devices/isValidBlockDevicePath.js'

describe( 'isValidBlockDevicePathUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isValidBlockDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isValidBlockDevicePathNamespace.isValidBlockDevicePath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isValidBlockDevicePathNamespace.isValidBlockDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isInvalidBlockDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isValidBlockDevicePathNamespace.isInvalidBlockDevicePath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isValidBlockDevicePathNamespace.isInvalidBlockDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
