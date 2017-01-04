/**
 * @module ui/my-1st-component.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class My-1stComponent
 * @extends Component
 */
exports.My-1stComponent = Component.specialize(/** @lends My-1stComponent# */ {
    constructor: {
        value: function My-1stComponent() {
            this.super();
        }
    }
});
