import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isSocketPathNamespace from '../../../../sources/file-system/sockets/isSocketPath.js'

function isSocketPathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isSocketPathUnits', () => {

		describe( 'isNotSocketPath()', () => {

			it( 'is bundlable', () => {

				expect(isSocketPathNamespace.isNotSocketPath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isSocketPathNamespace.isNotSocketPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'isSocketPath()', () => {

			it( 'is bundlable', () => {

				expect(isSocketPathNamespace.isSocketPath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isSocketPathNamespace.isSocketPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

	} )

}

export { isSocketPathUnits }

