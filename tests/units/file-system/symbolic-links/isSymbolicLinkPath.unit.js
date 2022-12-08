import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isSymbolicLinkPath.js'

function isSymbolicLinkPathUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isSymbolicLinkPathUnits', () => {

		describe( 'isNotSymbolicLinkPath()', () => {

			it( 'is bundlable', () => {

				expect(isSymbolicLinkPathNamespace.isNotSymbolicLinkPath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isSymbolicLinkPathNamespace.isNotSymbolicLinkPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

		describe( 'isSymbolicLinkPath()', () => {

			it( 'is bundlable', () => {

				expect(isSymbolicLinkPathNamespace.isSymbolicLinkPath).to.exist

			} )

			it( 'return type is boolean when path is of type string', () => {

				const dataSet0 = this._dataMap[ 'strings' ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isSymbolicLinkPathNamespace.isSymbolicLinkPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}

			} )

		} )

	} )

}

export { isSymbolicLinkPathUnits }

