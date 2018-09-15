/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [MIT]{@link https://opensource.org/licenses/MIT}
 *
 */

/* global suite, benchmark */

import { createDataMap } from '../../../TestsUtils'
import { isBoolean } from '../../../../builds/itee-validators.esm'

export default suite( 'Array iteration', function () {

    benchmark( 'isBoolean()', function () {

        const dataset = createDataMap().strings
        for ( let i = 0, n = dataset.length ; i < n ; i++ ) {
            return isBoolean( dataset[ i ] )
        }

    }, {
        setup: function () {
            this.dataset = 0
        },
        teardown: function () {
            delete this.dataset
        }
    } )

} )
