import { expect }       from 'chai'
import { Testing }      from 'itee-utils/sources/testings/benchmarks.js'
import * as isValidSymbolicLinkPathNamespace from '../../../../sources/file-system/symbolic-links/isValidSymbolicLinkPath.js'

describe( 'isValidSymbolicLinkPathUnits', function () {

	let _dataMap

	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isValidSymbolicLinkPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isValidSymbolicLinkPathNamespace.isValidSymbolicLinkPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isInvalidSymbolicLinkPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isValidSymbolicLinkPathNamespace.isInvalidSymbolicLinkPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
