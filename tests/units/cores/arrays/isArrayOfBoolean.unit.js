import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isArrayOfBooleanNamespace from '../../../../sources/cores/arrays/isArrayOfBoolean.js'

function isArrayOfBooleanUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isArrayOfBooleanUnits', () => {

		describe( 'isArrayOfBoolean()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfBooleanNamespace.isArrayOfBoolean).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfBooleanNamespace.isArrayOfBoolean( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotArrayOfBoolean()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfBooleanNamespace.isNotArrayOfBoolean).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfBooleanNamespace.isNotArrayOfBoolean( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isArrayOfBooleanUnits }

