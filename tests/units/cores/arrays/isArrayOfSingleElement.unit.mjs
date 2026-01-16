import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isArrayOfSingleElementNamespace from '../../../../sources/cores/arrays/isArrayOfSingleElement.js'

describe( 'isArrayOfSingleElementUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isArrayOfSingleElement()', function () {

		it( 'should be bundlable', async function () {

			expect(isArrayOfSingleElementNamespace.isArrayOfSingleElement).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isArrayOfSingleElementNamespace.isArrayOfSingleElement( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
