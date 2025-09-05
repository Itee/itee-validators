import { expect }       from 'chai'
import { beforeEach, afterEach, describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isArrayOfMultiElementNamespace from '../../../../sources/cores/arrays/isArrayOfMultiElement.js'


function isArrayOfMultiElementUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isArrayOfMultiElementUnits', () => {

		describe( 'isArrayOfMultiElement()', () => {

			it( 'is bundlable', () => {

				expect(isArrayOfMultiElementNamespace.isArrayOfMultiElement).to.exist

			} )

			it( 'return type is boolean when data is of any type', () => {

				const dataMap0 = this._dataMap
				for ( let dataSetKey0 in dataMap0 ) {
					const dataSet0 = dataMap0[ dataSetKey0 ]

					for ( let key0 in dataSet0 ) {
						const dataSetValue0 = dataSet0[ key0 ]
						const result = isArrayOfMultiElementNamespace.isArrayOfMultiElement( dataSetValue0 )
						expect(result).to.be.a('boolean')
					}
				}

			} )

		} )

	} )

}

export { isArrayOfMultiElementUnits }

