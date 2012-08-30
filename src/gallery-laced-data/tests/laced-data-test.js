YUI.add('laced-data-test', function (Y) {

  var Assert  = Y.Assert,
      AAssert = Y.ArrayAssert,
      OAssert = Y.ObjectAssert,
      suite   = new Y.Test.Suite('LacedData'),
      Pie, 
      PieList;

  suite.add(new Y.Test.Case({
    name: 'with no `lacedSource` set',

    setUp: function () {
      this.Pie     = Y.Base.create('Pie', Y.Model, [Y.LacedData]);

      this.PieList = Y.Base.create('PieList', Y.ModelList, [Y.LacedData], {
        model: this.Pie
      });

      this.model     = new this.Pie();
      this.modelList = new this.PieList();
    },

    tearDown: function () {
      delete this.Pie;
      delete this.PieList;
      delete this.model;
      delete this.modelList;
    },

    'it defaults null': function () {
      Assert.areEqual( this.model.lacedSource, null );
      Assert.areEqual( this.modelList.lacedSource, null );
    }
  }));
  
  suite.add(new Y.Test.Case({
    name: 'with `lacedSource` set to a string',

    setUp: function () {
      this.Pie = Y.Base.create('Pie', Y.Model, [Y.LacedData], {
        lacedSource: '{"type": "apple"}'
      });

      this.PieList = Y.Base.create('PieList', Y.ModelList, [Y.LacedData], {
        lacedSource:  '[{"type": "apple"}]',
        model:        this.Pie
      });

      this.model     = new this.Pie();
      this.modelList = new this.PieList();
    },

    tearDown: function () {
      delete this.Pie;
      delete this.PieList;
      delete this.model;
      delete this.modelList;
    },

    "it's parsed as JSON": function () {
      OAssert.areEqual( this.model.lacedSource, { type: 'apple' });

      Assert.isArray( this.modelList.lacedSource );
      Y.Array.each(this.modelList.lacedSource, function (o) {
        OAssert.areEqual(o, { type: 'apple' });
      });
    }

  }));

  suite.add(new Y.Test.Case({
    name: 'load',

    setUp: function () {

      this.Pie = Y.Base.create('Pie', Y.Model, [Y.LacedData], {
        lacedSource: '{"type": "apple"}',

        extractLacedDataCallCount: 0,
        extractLacedData: function () {
          this.extractLacedDataCallCount++;
        }
      });

      this.PieList = Y.Base.create('PieList', Y.ModelList, [Y.LacedData], {
        lacedSource:  '[{"type": "apple"}]',
        model:        this.Pie,

        extractLacedDataCallCount: 0,
        extractLacedData: function () {
          this.extractLacedDataCallCount++;
        }
      });

      this.model     = new this.Pie();
      this.modelList = new this.PieList();
    },

    tearDown: function () {
      delete this.Pie;
      delete this.PieList;
      delete this.model;
      delete this.modelList;
    },

    'it calls `extractLacedData` before calling load' : function () {
      this.model.load();
      this.modelList.load();

      Assert.areEqual(
        1, 
        this.model.extractLacedDataCallCount, 
        'Should call extractLacedData on model'
      );
      Assert.areEqual(
        1, 
        this.modelList.extractLacedDataCallCount, 
        'Should call extractLacedData on modelList'
      );
    }
  }));


  suite.add(new Y.Test.Case({
    name: 'extractLacedData',

    setUp: function () {

      this.Pie = Y.Base.create('Pie', Y.Model, [Y.LacedData], {
        lacedSource: {"type": "apple"}
      });

      this.PieList = Y.Base.create('PieList', Y.ModelList, [Y.LacedData], {
        lacedSource:  [{"type": "apple"}],
        model:        this.Pie
      });

      this.model     = new this.Pie();
      this.modelList = new this.PieList();
    },

    tearDown: function () {
      delete this.Pie;
      delete this.PieList;
      delete this.model;
      delete this.modelList;
    },

    'it calls setAttrs on the model with the data': function () {
      var model = Y.Mock(this.model);

      Y.Mock.expect(model, {
        method: 'setAttrs',
        args: [model.lacedSource]
      });

      model.extractLacedData();

      Y.Mock.verify(model);
    },

    'it resets the modelList with the data': function () {
      var modelList = Y.Mock(this.modelList);

      Y.Mock.expect(modelList, {
        method: 'reset',
        args: [modelList.lacedSource]
      });

      modelList.extractLacedData();

      Y.Mock.verify(modelList);
    }

  }));

  Y.Test.Runner.add(suite);

}, 
'@VERSION@', 
{
  requires: [
    'gallery-laced-data', 
    'model', 
    'model-list', 
    'test'
  ]
});
