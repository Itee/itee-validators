/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global describe, beforeEach, afterEach */

import { TestsUtils }            from '../../../itee-validators.tests-utils.js'
import { isCelsiusUnits }        from './isCelsius.units'
import { isFahrenheitUnits }     from './isFahrenheit.units'
import { isKelvinUnits }         from './isKelvin.units'
import { isNotCelsiusUnits }     from './isNotCelsius.units'
import { isNotFahrenheitUnits }  from './isNotFahrenheit.units'
import { isNotKelvinUnits }      from './isNotKelvin.units'
import { isNotTemperatureUnits } from './isNotTemperature.units'
import { isTemperatureUnits }    from './isTemperature.units'

function _temperaturesUnits () {

    describe( 'Temperatures', () => {

        beforeEach( () => {

            this._dataMap = TestsUtils.createDataMap()

        } )

        afterEach( () => {

            delete this._dataMap

        } )

        isCelsiusUnits.call( this )
        isFahrenheitUnits.call( this )
        isKelvinUnits.call( this )
        isNotCelsiusUnits.call( this )
        isNotFahrenheitUnits.call( this )
        isNotKelvinUnits.call( this )
        isNotTemperatureUnits.call( this )
        isTemperatureUnits.call( this )

    } )

}

export { _temperaturesUnits }

