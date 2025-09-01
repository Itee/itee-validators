import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isValidSocketPathNamespace from '../../../../sources/file-system/sockets/isValidSocketPath.js'

function isValidSocketPathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isValidSocketPathUnits', () => {

		describe( 'isValidSocketPath()', () => {

			it( 'is bundlable', () => {

				expect(isValidSocketPathNamespace.isValidSocketPath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isValidSocketPathNamespace.isValidSocketPath( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isInvalidSocketPath()', () => {

			it( 'is bundlable', () => {

				expect(isValidSocketPathNamespace.isInvalidSocketPath).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isValidSocketPathNamespace.isInvalidSocketPath( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isValidSocketPathUnits }

