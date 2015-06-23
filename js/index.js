var quill;   // Expose as global so people can easily try out the API

$(document).ready(function() {
  quill = new Quill('#editor', {
    modules: {
      'toolbar': { container: '#toolbar' },
      'image-tooltip': true,
      'link-tooltip': true
    },
    theme: 'snow'
  });

  // Bootstrap Toolbar has positioning but when showing manually when tooltip is offscreen
  $('.quill-wrapper').tooltip({ trigger: 'manual', animation: false }).tooltip('show');
  $('.quill-wrapper + .tooltip').hide();
  var tooltipTimer = setTimeout(function() {
    $('.quill-wrapper + .tooltip').fadeIn(1000);
  }, 2500);

  quill.once('selection-change', function(hasFocus) {
    $('#editor').toggleClass('focus', hasFocus);
    // Hack for inability to scroll on mobile
    if (/mobile/i.test(navigator.userAgent)) {
      $('#editor').css('height', quill.root.scrollHeight + 30)   // 30 for padding
    }
    $('.quill-wrapper').tooltip('destroy');
    clearTimeout(tooltipTimer);
  });

  var users = [
    'Asana',
    'Blahsay',
    'Intuit',
    'Lever',
    'MerchantCircle',
    'RelateIQ',
    'Respondly',
    'Salesforce',
    'ThemeXpert',
    'Vox Media'
  ];

  // Show users randomly
  $('#users-container img').each(function(i, elem) {
    var index = Math.floor(Math.random() * users.length);
    var user = users[index];
    users.splice(index, 1);
    $(elem).attr({
      src: '/images/users/' + (user.toLowerCase().replace(/\s/g, '')) + '.png',
      alt: user
    });
  });

  console.log("Welcome to Quill!\n\nThe editor on this page is available via `quill`. Give the API a try:\n\n\tquill.formatText(6, 10, 'bold', true);\n\nVisit the API documenation page to learn more: http://quilljs.com/docs/api/\n");
});