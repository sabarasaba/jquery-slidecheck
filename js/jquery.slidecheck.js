/*
 *  Project: jquery.slidecheck
 *  Description: A better looking checkbox.
 *  Author: Ignacio A. Rivas
 *  License: MIT Licence
 */

;(function ( $, window, document, undefined ) {

  // Create the defaults once
  var pluginName = 'slidecheck',
    defaults = {
  };

  // The actual plugin constructor
  function SlideCheck( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options );

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  SlideCheck.prototype = {

    init: function() {
      this.attachEvents(this.element, this.options);
    },

    attachEvents: function(el, options) {
      $(el).addClass('slideCheck');
      var that = this;

      if (el.hasAttribute('type') && el.attributes['type'].value == 'checkbox'){
        var checkbox = el;
        var track = document.createElement('label');
        track.className='slideCheckTrack';
        track.appendChild(checkbox.cloneNode(true));
        checkbox.parentNode.replaceChild(track, checkbox);
        checkbox = track.firstChild;

        checkbox.addEventListener( 'mousedown', function(){ that.startDrag(this) }, false);
        checkbox.addEventListener('touchstart', function(){ that.startDrag(this) }, false);
        checkbox.addEventListener( 'mousemove', function(){ that.drag(this)      }, false);
        checkbox.addEventListener( 'touchmove', function(){ that.drag(this)      }, false);
        checkbox.addEventListener(   'mouseup', function(){ that.stopDrag(this)  }, false);
        checkbox.addEventListener(  'mouseout', function(){ that.stopDrag(this)  }, false);
        checkbox.addEventListener(  'touchend', function(){ that.stopDrag(this)  }, false);
      }
    },

    startDrag: function(el) {
      if (!el.dragData) {
        var ecx = event.clientX||event.touches[0].clientX;
        el.dragData={
          x: ecx-el.offsetLeft
        };
      };
    },

    drag: function(el) {
      if (el.dragData) {
        el.isDragging = true;

        var ecx = event.clientX||event.touches[0].clientX;
        el.style.setProperty('-webkit-transition', 'none');

        if (ecx-el.dragData.x >= 0 && ecx-el.dragData.x <= el.parentNode.offsetWidth-el.offsetWidth){
          el.style.setProperty('left', ecx-el.dragData.x+'px');
        }
      }
    },

    stopDrag: function(el) {
      if (el.isDragging) {
        if (event.type == 'mouseup' || event.type == 'touchend' ) {
          el.addEventListener('click', function(e){e.preventDefault();this.removeEventListener('click', arguments.callee, false)}, false);
        }
        el.isDragging = false;
      }
      if (el.dragData) {
        if ((el.offsetLeft+(el.offsetWidth/2)) >= (el.parentNode.offsetWidth/2)) {
          el.checked = true;
        }
        else{
          el.checked = false;
        }

        el.style.removeProperty('-webkit-transition');
        el.style.removeProperty('left');
        el.dragData = null;
      }
    }
  };

  // Preventing against multiple instantiations.
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new SlideCheck( this, options ));
      }
    });
  };

})( jQuery, window, document );