import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as istrueNamespace from '../../../../sources/cores/booleans/isTrue.js'

describe( 'istrueUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isTrue()', function () {

		it( 'should be bundlable', async function () {

			expect(istrueNamespace.isTrue).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = istrueNamespace.isTrue( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isFalse()', function () {

		it( 'should be bundlable', async function () {

			expect(istrueNamespace.isFalse).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = istrueNamespace.isFalse( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
