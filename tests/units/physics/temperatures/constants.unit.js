import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as constantsNamespace from '../../../../sources/physics/temperatures/constants.js'

function constantsUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'constantsUnits', () => {

	} )

}

export { constantsUnits }

