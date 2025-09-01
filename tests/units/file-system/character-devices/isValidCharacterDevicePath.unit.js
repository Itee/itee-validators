import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isValidCharacterDevicePathNamespace from '../../../../sources/file-system/character-devices/isValidCharacterDevicePath.js'

function isValidCharacterDevicePathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isValidCharacterDevicePathUnits', () => {

		describe( 'isValidCharacterDevicePath()', () => {

			it( 'is bundlable', () => {

				expect(isValidCharacterDevicePathNamespace.isValidCharacterDevicePath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isValidCharacterDevicePathNamespace.isValidCharacterDevicePath( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isInvalidCharacterDevicePath()', () => {

			it( 'is bundlable', () => {

				expect(isValidCharacterDevicePathNamespace.isInvalidCharacterDevicePath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isValidCharacterDevicePathNamespace.isInvalidCharacterDevicePath( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isValidCharacterDevicePathUnits }

