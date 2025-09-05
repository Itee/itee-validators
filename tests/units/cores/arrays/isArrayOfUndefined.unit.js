import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isArrayOfUndefinedNamespace from '../../../../sources/cores/arrays/isArrayOfUndefined.js'


function isArrayOfUndefinedUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isArrayOfUndefinedUnits', () => {

		describe( 'isArrayOfUndefined()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfUndefinedNamespace.isArrayOfUndefined).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfUndefinedNamespace.isArrayOfUndefined( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

		describe( 'isNotArrayOfUndefined()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfUndefinedNamespace.isNotArrayOfUndefined).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfUndefinedNamespace.isNotArrayOfUndefined( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isArrayOfUndefinedUnits }

