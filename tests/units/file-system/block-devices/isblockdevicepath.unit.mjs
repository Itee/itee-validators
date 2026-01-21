import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isblockdevicepathNamespace from '../../../../sources/file-system/block-devices/isBlockDevicePath.js'

const Testing   = await getTestingPackage()

describe( 'isblockdevicepathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isBlockDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isblockdevicepathNamespace.isBlockDevicePath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isblockdevicepathNamespace.isBlockDevicePath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotBlockDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isblockdevicepathNamespace.isNotBlockDevicePath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isblockdevicepathNamespace.isNotBlockDevicePath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
