import { expect }       from 'chai'
import { getTestingPackage } from '../../../../node_modules/@itee/tasks/sources/utils/testing.js'
import * as isvalidsymboliclinkpathNamespace from '../../../../sources/file-system/symbolic-links/isValidSymbolicLinkPath.js'

const Testing   = await getTestingPackage()

describe( 'isvalidsymboliclinkpathUnits', function () {

	let _dataMap
	before( function() {
		_dataMap = Testing.createDataMap()
	} )

	describe( 'isValidSymbolicLinkPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isvalidsymboliclinkpathNamespace.isValidSymbolicLinkPath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isvalidsymboliclinkpathNamespace.isValidSymbolicLinkPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

	describe( 'isInvalidSymbolicLinkPath()', function () {

		it( 'should be bundlable', async function () {

			expect(isvalidsymboliclinkpathNamespace.isInvalidSymbolicLinkPath).to.exist

		} )

		it( 'should return value of type boolean when data is of any type', async function() {

			const dataMap0 = _dataMap
			for ( let dataSetKey0 in dataMap0 ) {
				const dataSet0 = dataMap0[ dataSetKey0 ]

				for ( let key0 in dataSet0 ) {
					const dataSetValue0 = dataSet0[ key0 ]
					const result = isvalidsymboliclinkpathNamespace.isInvalidSymbolicLinkPath( dataSetValue0 )
					expect(result).to.be.a('boolean')
				}
			}

		} )

	} )

} )
