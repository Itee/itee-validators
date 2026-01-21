import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isvalidcharacterdevicepathNamespace from '../../../../sources/file-system/character-devices/isValidCharacterDevicePath.js'

describe( 'isvalidcharacterdevicepathUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isValidCharacterDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isvalidcharacterdevicepathNamespace.isValidCharacterDevicePath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isvalidcharacterdevicepathNamespace.isValidCharacterDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isInvalidCharacterDevicePath()', function () {

		it( 'should be bundlable', async function () {

			expect(isvalidcharacterdevicepathNamespace.isInvalidCharacterDevicePath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isvalidcharacterdevicepathNamespace.isInvalidCharacterDevicePath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
