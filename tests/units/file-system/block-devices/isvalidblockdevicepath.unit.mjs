import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isvalidblockdevicepathNamespace from '../../../../sources/file-system/block-devices/isValidBlockDevicePath.js'

const Testing   = await getTestingPackage()

describe( 'isvalidblockdevicepathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isValidBlockDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isvalidblockdevicepathNamespace.isValidBlockDevicePath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isvalidblockdevicepathNamespace.isValidBlockDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isInvalidBlockDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isvalidblockdevicepathNamespace.isInvalidBlockDevicePath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isvalidblockdevicepathNamespace.isInvalidBlockDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
