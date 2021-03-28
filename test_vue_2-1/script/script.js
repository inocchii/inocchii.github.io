new Vue({
    el: '#app', // el: Vueインスタンスを結びつけるHTML要素を指定。この要素配下のみでVue.jsが有効となる
    data(){     // data: function(){ という書き方が基本 => data(){ は短縮形
      return {
        text: 'hello Vue.js'
      }
    }
});