!function( $ ) {
  'use strict'
 
  $.fn.highlight = function(options) {
    
    function Highlight( element, options ) {
      this.$element = $(element)
      this.options = options
    }
    
    Highlight.prototype = {
      add : function( keyword ) {
        var html = this.$element.html()
          , esckeyword = $( '<div/>' ).text( keyword ).html()
          , regexp = new RegExp( '(' + esckeyword + ')', this.options.ignoreCase ? 'gi' : 'g' )
          , highlighttmpl = '<span class=' + this.options.cssClass + '>$1</span>'
          
        this.$element.html( html.replace( regexp, highlighttmpl ) )
      }
      
    , remove : function(  ) {
        this.$element.find( 'span.' + this.options.cssClass ).contents().unwrap()
      }
    }
    
    return this.each( function() { 
      var $this = $(this)
        , highlight = $this.data( 'highlight' )
        , keyword = undefined
      
      if ( typeof options === 'string' ) {
        keyword = options
      }
      if ( typeof options === 'object' ) {
        keyword = options.keyword
      }
            
      if ( highlight ) {
        $.extend( highlight.options, options )
      }
      else {
        highlight = new Highlight( this, $.extend( {}, $.fn.highlight.defaults, options ) )
        $this.data( 'highlight', highlight )
      }
      highlight.remove()
      if ( keyword ) {
        highlight.add( keyword )
      }
    })
  }

  $.fn.highlight.defaults = {
    cssClass: 'highlight'
  , ignoreCase: true
  , keyword: undefined
  }

}( window.jQuery );