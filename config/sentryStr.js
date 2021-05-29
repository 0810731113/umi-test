export const growioStr = `
        !(function(e, t, n, g, i) {
  (e[i] =
    e[i] ||
    function() {
      (e[i].q = e[i].q || []).push(arguments);
    }),
    (n = t.createElement('script')),
    (tag = t.getElementsByTagName('script')[0]),
    (n.async = 1),
    (n.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + g),
    tag.parentNode.insertBefore(n, tag);
})(window, document, 'script', 'assets.growingio.com/2.1/gio.js', 'gio');
gio('init', '90cd4fa8e924e7b7');
gio('config', { hashtag: true });

if (window.location.hostname == 'www.trialos.com') {
  gio('track', 'homechannelpageview', {});
  gio('send');
}

var time = setInterval(function() {
  var ses = JSON.parse(window.sessionStorage.getItem('userCacheData'));
  if (window.location.hostname == 'www.trialos.com') {
    //正式环境启用
    if (ses && ses.UserId) {
      gio('setUserId', ses.UserId);

      gio('app.set', ses);

      gio('people.set', ses);

      gio('visitor.set', ses);

      gio('page.set', ses);

      gio('evar.set', ses);

      gio('send');
      clearInterval(time);
    }
  }
}, 10000);

    `.replace(/'/g, '"');
