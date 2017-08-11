
var AjaxNavigation = function(options)
{
  var i;

  this.options = {
    selector: 'a[data-ajax=true], [data-ajax-inner=true] a',
    appSelector: '#app',
    argument: 'ajax=true',
    ignoredLinks: [
      '#', '!#'
    ],
    errors: {
      '403': false,
      '404': false,
      '500': false,
    },
    onPageLoad: null

	};

  for (i in options) {
    this.options[i] = options[i];
  }



  this.init = function()
  {
    var navigation = this;
    $(document).on('click', navigation.options.selector, function() {
      var href = $(this).attr('href');
      if($.inArray(href, navigation.options.ignoredLinks) < 0)
      {
        var url = navigation.prepareUrl(href);
        history.pushState(null, null, href);
        navigation.load(url);
        return false;
      }

    });

    $(window).on("popstate", function(e) {
  		var href = location.href;
      var url = navigation.prepareUrl(href);
      navigation.load(url);
  	});
  }

  this.load = function(url)
  {
    var navigation = this;
    $.ajax({
      url: url,
      complete: function(xhr) {
        if(navigation.options.errors[xhr.status])
        {
          navigation.load(navigation.prepareUrl(navigation.options.errors[xhr.status]));
        }
      }
    }).done(function(data) {
      $(navigation.options.appSelector).html(data);
      if(typeof navigation.options.onPageLoad == 'function')
      {
        navigation.options.onPageLoad();
      }
    });
  }

  this.prepareUrl = function(href)
  {
    return href += ((href.indexOf('?') + 1) ? '&' : '?') + this.options.argument;
  }

  this.onPageLoad = function(callback)
  {
    if(typeof callback == 'function')
    {
        this.options.onPageLoad = callback;
    }
  }

  this.init();
}
