import { expect }       from 'chai'
import { describe, it } from 'mocha'
import { Testing }      from 'itee-utils'
import * as isKelvinNamespace from '../../../../sources/physics/temperatures/isKelvin.js'

function isKelvinUnits () {

	beforeEach( () => {

		this._dataMap = Testing.createDataMap()

	} )

	afterEach( () => {

		delete this._dataMap

	} )

	describe( 'isKelvinUnits', () => {

	} )

}

export { isKelvinUnits }

