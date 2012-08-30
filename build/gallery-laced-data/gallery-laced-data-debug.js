YUI.add('gallery-laced-data', function(Y) {

/**
An Extension which provides a simple way to load model data
laced into the original html payload.
Mix into a Model or ModelList subclass.

@module gallery-laced-data
**/

/**
@class LacedData
@extensionfor Model
@extensionfor ModelList
**/

var LacedData   = function () {},
    Lang        = Y.Lang,
    isArray     = Lang.isArray,
    isString    = Lang.isString,
    isFunction  = Lang.isFunction;

LacedData.prototype = {

  /**
  @property lacedSource
  @description 
    Set this to the source of the laced data.
  @type {Object}
  **/
  lacedSource: null,

  initializer: function () {
    var lacedSource = this.lacedSource;

    if (lacedSource) {

      // parse as JSON if the laced source is a string
      if (isString(lacedSource)) {
        lacedSource = Y.JSON.parse(lacedSource);
        this.lacedSource = lacedSource;
      }
      
      // cache modelList check
      this._forModelList = this._isYUIModelList && isArray(lacedSource);

      // displace `load`
      Y.Do.before(this.extractLacedData, this, 'load', this);
    }
  },

  /**
  @method extractLacedData
  @description initializes itself from laced data
  **/
  extractLacedData: function (options, callback) {
    var data = this.lacedSource;

    // allow callback as only arg
    if (isFunction(options)) {
      callback = options;
    }

    // use the laced data correctly
    // for either modelList or model
    if (this._forModelList) {
      this.reset(data);
    }
    else {
      this.setAttrs(data);
    }

    // displacing `load` means taking on its'
    // promise of invoking the callback if passed 
    if (callback) {
      callback.apply(null, arguments);
    }

    this.fire('load');

    // don't allow `load` to be called
    Y.Do.Prevent('laced');
  }

};

// Expose API
Y.LacedData = LacedData;


}, '@VERSION@' ,{requires:['model', 'model-list', 'json'], skinnable:false});
