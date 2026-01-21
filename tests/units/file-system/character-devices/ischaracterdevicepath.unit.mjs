import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as ischaracterdevicepathNamespace from '../../../../sources/file-system/character-devices/isCharacterDevicePath.js'

const Testing   = await getTestingPackage()

describe( 'ischaracterdevicepathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isCharacterDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(ischaracterdevicepathNamespace.isCharacterDevicePath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = ischaracterdevicepathNamespace.isCharacterDevicePath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

	describe( 'isNotCharacterDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(ischaracterdevicepathNamespace.isNotCharacterDevicePath).to.exist

		} )

		it( 'should return value of type boolean when path is of type string', async function() {

			const dataSet0 = _dataMap[ 'strings' ]

			for ( let key0 in dataSet0 ) {
				const dataSetValue0 = dataSet0[ key0 ]
				const result = ischaracterdevicepathNamespace.isNotCharacterDevicePath( dataSetValue0 )
				expect(result).to.be.a('boolean')
			}

		} )

	} )

} )
