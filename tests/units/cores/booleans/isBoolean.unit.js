import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isBooleanNamespace from '../../../../sources/cores/booleans/isBoolean.js'

function isBooleanUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isBooleanUnits', () => {

		describe( 'isBoolean()', () => {

			it( 'is bundlable', () => {

				expect(isBooleanNamespace.isBoolean).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isBooleanNamespace.isBoolean( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotBoolean()', () => {

			it( 'is bundlable', () => {

				expect(isBooleanNamespace.isNotBoolean).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isBooleanNamespace.isNotBoolean( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isBooleanUnits }

