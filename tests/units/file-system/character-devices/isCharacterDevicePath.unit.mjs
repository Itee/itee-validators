import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isCharacterDevicePathNamespace from '../../../../sources/file-system/character-devices/isCharacterDevicePath.js'

describe( 'isCharacterDevicePathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isCharacterDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isCharacterDevicePathNamespace.isCharacterDevicePath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isCharacterDevicePathNamespace.isCharacterDevicePath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotCharacterDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isCharacterDevicePathNamespace.isNotCharacterDevicePath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = isCharacterDevicePathNamespace.isNotCharacterDevicePath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
