if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["/build/gallery-laced-data/gallery-laced-data.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "/build/gallery-laced-data/gallery-laced-data.js",
    code: []
};
_yuitest_coverage["/build/gallery-laced-data/gallery-laced-data.js"].code=["YUI.add('gallery-laced-data', function(Y) {","","/**","An Extension which provides a simple way to load model data","laced into the original html payload.","Mix into a Model or ModelList subclass.","","@module gallery-laced-data","**/","","/**","@class LacedData","@extensionfor Model","@extensionfor ModelList","**/","","var LacedData   = function () {},","    Lang        = Y.Lang,","    isArray     = Lang.isArray,","    isString    = Lang.isString,","    isFunction  = Lang.isFunction;","","LacedData.prototype = {","","  /**","  @property lacedSource","  @description ","    Set this to the source of the laced data.","  @type {Object}","  **/","  lacedSource: null,","","  initializer: function () {","    var lacedSource = this.lacedSource;","","    if (lacedSource) {","","      // parse as JSON if the laced source is a string","      if (isString(lacedSource)) {","        lacedSource = Y.JSON.parse(lacedSource);","        this.lacedSource = lacedSource;","      }","      ","      // cache modelList check","      this._forModelList = this._isYUIModelList && isArray(lacedSource);","","      // displace `load`","      Y.Do.before(this.extractLacedData, this, 'load', this);","    }","  },","","  /**","  @method extractLacedData","  @description initializes itself from laced data","  **/","  extractLacedData: function (options, callback) {","    var data = this.lacedSource;","","    // allow callback as only arg","    if (isFunction(options)) {","      callback = options;","    }","","    // use the laced data correctly","    // for either modelList or model","    if (this._forModelList) {","      this.reset(data);","    }","    else {","      this.setAttrs(data);","    }","","    // displacing `load` means taking on its'","    // promise of invoking the callback if passed ","    if (callback) {","      callback.apply(null, arguments);","    }","","    this.fire('load');","","    // don't allow `load` to be called","    Y.Do.Prevent('laced');","  }","","};","","// Expose API","Y.LacedData = LacedData;","","","}, '@VERSION@' ,{requires:['model', 'model-list', 'json'], skinnable:false});"];
_yuitest_coverage["/build/gallery-laced-data/gallery-laced-data.js"].lines = {"1":0,"17":0,"23":0,"34":0,"36":0,"39":0,"40":0,"41":0,"45":0,"48":0,"57":0,"60":0,"61":0,"66":0,"67":0,"70":0,"75":0,"76":0,"79":0,"82":0,"88":0};
_yuitest_coverage["/build/gallery-laced-data/gallery-laced-data.js"].functions = {"initializer:33":0,"extractLacedData:56":0,"(anonymous 1):1":0};
_yuitest_coverage["/build/gallery-laced-data/gallery-laced-data.js"].coveredLines = 21;
_yuitest_coverage["/build/gallery-laced-data/gallery-laced-data.js"].coveredFunctions = 3;
_yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 1);
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

_yuitest_coverfunc("/build/gallery-laced-data/gallery-laced-data.js", "(anonymous 1)", 1);
_yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 17);
var LacedData   = function () {},
    Lang        = Y.Lang,
    isArray     = Lang.isArray,
    isString    = Lang.isString,
    isFunction  = Lang.isFunction;

_yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 23);
LacedData.prototype = {

  /**
  @property lacedSource
  @description 
    Set this to the source of the laced data.
  @type {Object}
  **/
  lacedSource: null,

  initializer: function () {
    _yuitest_coverfunc("/build/gallery-laced-data/gallery-laced-data.js", "initializer", 33);
_yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 34);
var lacedSource = this.lacedSource;

    _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 36);
if (lacedSource) {

      // parse as JSON if the laced source is a string
      _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 39);
if (isString(lacedSource)) {
        _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 40);
lacedSource = Y.JSON.parse(lacedSource);
        _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 41);
this.lacedSource = lacedSource;
      }
      
      // cache modelList check
      _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 45);
this._forModelList = this._isYUIModelList && isArray(lacedSource);

      // displace `load`
      _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 48);
Y.Do.before(this.extractLacedData, this, 'load', this);
    }
  },

  /**
  @method extractLacedData
  @description initializes itself from laced data
  **/
  extractLacedData: function (options, callback) {
    _yuitest_coverfunc("/build/gallery-laced-data/gallery-laced-data.js", "extractLacedData", 56);
_yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 57);
var data = this.lacedSource;

    // allow callback as only arg
    _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 60);
if (isFunction(options)) {
      _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 61);
callback = options;
    }

    // use the laced data correctly
    // for either modelList or model
    _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 66);
if (this._forModelList) {
      _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 67);
this.reset(data);
    }
    else {
      _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 70);
this.setAttrs(data);
    }

    // displacing `load` means taking on its'
    // promise of invoking the callback if passed 
    _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 75);
if (callback) {
      _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 76);
callback.apply(null, arguments);
    }

    _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 79);
this.fire('load');

    // don't allow `load` to be called
    _yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 82);
Y.Do.Prevent('laced');
  }

};

// Expose API
_yuitest_coverline("/build/gallery-laced-data/gallery-laced-data.js", 88);
Y.LacedData = LacedData;


}, '@VERSION@' ,{requires:['model', 'model-list', 'json'], skinnable:false});
