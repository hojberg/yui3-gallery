YUI.add("gallery-laced-data",function(f){var c=function(){},d=f.Lang,b=d.isArray,a=d.isString,e=d.isFunction;c.prototype={lacedSource:null,initializer:function(){var g=this.lacedSource;if(g){if(a(g)){g=f.JSON.parse(g);this.lacedSource=g;}this._forModelList=this._isYUIModelList&&b(g);f.Do.before(this.extractLacedData,this,"load",this);}},extractLacedData:function(g,i){var h=this.lacedSource;if(e(g)){i=g;}if(this._forModelList){this.reset(h);}else{this.setAttrs(h);}if(i){i.apply(null,arguments);}this.fire("load");f.Do.Prevent("laced");}};f.LacedData=c;},"@VERSION@",{requires:["model","model-list","json"],skinnable:false});