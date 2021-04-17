// Vue sample
//   View  : UI＆見た目の部分（HTML）
//   Action: Viewからのイベント処理（methods）
//   State : 状態、データを保持（dataプロパティ）
//   Component : 部品（親子）

// メイン（Root）
const objVue = new Vue({
    // el: Vueのインスタンスを結びつけるHTML要素を指定 = View
    el: '#app',
    // components: 外部モジュールとして取り込んだコンポーネントを登録
    // data: dataプロパティ（data関数） = State
    data: {
        page: 1,
        params: {
            name: '',
            name_kana: '',
            address: '',
            delivery_time: '',
            coupon_code: ''
        }
    },
    // methods: メソッド定義 = Action
    methods: {
        next() {
            this.page++;
        },
        prev() {
            this.page--;
        },
        submit() {
            /* ここでAjax送信 */
            const url = '******';
            axios.post(url, this.params)
                .then((response) => {
                    // ここで何かをする
                });
        },
        navigationCss(targetPage) {
            if(this.page === targetPage) {  // 現在ページの場合
                return ['col-4', 'text-center', 'text-white', 'bg-info', 'p-2'];
            }
            return ['col-4', 'text-center', 'text-secondary', 'p-2'];
        }
    }
    // computed: 算出プロパティ（関数）
    // template: HTMLテンプレート

});
console.log("objVue.page="+objVue.page);
