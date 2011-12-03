$(function () {

    module('highlight.js')

      test('highlight should be wrapped in span', function () {
        var $text = $('<div id="text">Some test content</div>')
        
        $text.highlight('test')

        equals($text.html()
               , 'Some <span class="highlight">test</span> content')
      })
      
      test('highlight can contain escaped chars', function () {
        var $text = $('<div id="text">Some test content</div>')

        $text.highlight('test')

        equals($text.html()
               , 'Some <span class="highlight">test</span> content')
      })
      
      test('multiple words should be highligted', function () {
        var $text = $('<div id="text">Some test content test</div>')

        $text.highlight('test')

        equals($text.html()
               , 'Some <span class="highlight">test</span> content <span class="highlight">test</span>')
      } )
      
      test('highligt should work with nested html', function () {
        var $text = $('<div id="text">Some <span>test</span> content <span>this is a test with nesting</span></div>')

         $text.highlight('test')

         equals($text.html()
                , 'Some <span><span class="highlight">test</span></span>' 
                + ' content <span>this is a <span class="highlight">test</span> with nesting</span>')
      
      } )
      
      test('highligt should work with multiple elements', function () {
        var $text = $('<div><div>Some <span>test</span> content</div><div><span>this is a test with nesting</span></div></div>')

         $text.find( 'div' ).highlight('test')

         equals($text.html()
                , '<div>Some <span><span class="highlight">test</span></span> content</div>' 
                + '<div><span>this is a <span class="highlight">test</span> with nesting</span></div>')
      
      } )
      
      test('hightlight css class should be optional', function () {
        var $text = $('<div id="text">Some test content</div>')
          , options = { keyword:'test', cssClass:'myhighlight' }
          
        $text.highlight(options)

        equals( $text.html(), 'Some <span class="myhighlight">test</span> content' )
      })
      
      test( "highlight should be removed", function() {
        var $text = $('<div id="text">Some test content</div>')
                     .appendTo('#qunit-runoff')
          , highlight = $text.appendTo('#qunit-runoff').highlight('test')
        
        $text.highlight('test')

        $text.highlight( );
        
        equals($text.html(), 'Some test content')

      })
      
      test( "highlight with custom css class should be removed", function() {
        var $text = $('<div id="text">Some test content</div>')
          , options = { keyword:'test', cssClass:'myhighlight' }
          
        $text.highlight(options)

        $text.highlight( );
        
        equals($text.html(), 'Some test content')

      })

})