import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isSymbolNamespace from '../../../../sources/cores/symbols/isSymbol.js'

function isSymbolUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isSymbolUnits', () => {

		describe( 'isSymbol()', () => {

			it( 'is bundlable', () => {

				expect(isSymbolNamespace.isSymbol).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isSymbolNamespace.isSymbol( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotSymbol()', () => {

			it( 'is bundlable', () => {

				expect(isSymbolNamespace.isNotSymbol).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isSymbolNamespace.isNotSymbol( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isSymbolUnits }

