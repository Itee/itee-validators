import { expect }       from 'chai'
import { describe, it } from 'mocha'
//import { Testing }      from 'itee-utils/sources/testings/benchmarks'
import { Testing }      from 'itee-utils'
import * as isValidBlockDevicePathNamespace from '../../../../sources/file-system/block-devices/isValidBlockDevicePath.js'

function isValidBlockDevicePathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isValidBlockDevicePathUnits', () => {

		describe( 'isValidBlockDevicePath()', () => {

			it( 'is bundlable', () => {

				expect(isValidBlockDevicePathNamespace.isValidBlockDevicePath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
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

		describe( 'isInvalidBlockDevicePath()', () => {

			it( 'is bundlable', () => {

				expect(isValidBlockDevicePathNamespace.isInvalidBlockDevicePath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
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

}

export { isValidBlockDevicePathUnits }

