document.addEventListener('init', function (event) {
    if (event.target.id === 'pageNav1') {
      var title = event.target.data && event.target.data.title ? event.target.data.title : 'Custom Page';
      event.target.querySelector('ons-toolbar div.center').textContent = title;
    }
    if (event.target.id === 'pageNav2') {
      var cardTitle = event.target.data && event.target.data.cardTitle ? event.target.data.cardTitle : 'Custom Card';
      event.target.querySelector('ons-card div.title').textContent = cardTitle;
    }
});
  
var customPush = function () {
    myNavigator.pushPage('pageNav1.html', { data: { title: myNavigator.topPage.querySelector('ons-input').value } })
};
  
var customPush2 = function (event) {
    myNavigator.pushPage('pageNav2.html', { data: { cardTitle: event.target.textContent } })
};