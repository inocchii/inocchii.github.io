// Vue sample
//   View  : UI＆見た目の部分（HTML）
//   Action: Viewからのイベント処理（methods）
//   State : 状態、データを保持（dataプロパティ）
const objVue = new Vue({
    // el: Vueのインスタンスを結びつけるHTML要素を指定 = View
    el: '#app',
    // data: dataプロパティ（data関数） = State
    data() {
        return {
            // 基本部用
            width: 200,
            height: 30,
            color: '#666',
            bgColor: '#efefef',
            // 色を変化させる
            range: 10,
            red: 0,
            green: 0,
            blue: 0,
            // クラスバインディング用
            isActive: true,
            // オブジェクトで
            classObj: {
                error: true,
                'is-active': true
            }
        };
    },
    // methods: メソッド定義 = Action
    methods: {
        // ハンバーガーボタン用
        tobbleButton() {
            this.isActive = !this.isActive;
        }
    },
    // computed: 算出プロパティ（関数）
    computed: {
        // 基本部用
        bindStyle() {
            // テンプレート文字列
            return `width: ${this.width}px; height: ${this.height}px; color: ${this.color};`;
        },
        // 色を変化させる
        bindStyle2() {
            // プロパティが変化することで算出プロパティも変化
            return `width: ${this.range}px; height: ${this.range}px; background: rgb(${this.red},${this.green},${this.blue})`;
        },
    }
    // template: HTMLテンプレート
    // components: 外部モジュールとして取り込んだコンポーネントを登録
});
console.log("objVue.bindStyle="+objVue.bindStyle);
