// Vue sample
//   View  : UI＆見た目の部分（HTML）
//   Action: Viewからのイベント処理（methods）
//   State : 状態、データを保持（dataプロパティ）
const objVue = new Vue({
    // el: Vueのインスタンスを結びつけるHTML要素を指定 = View
    el: '#app',
    // data: dataプロパティ（data関数） = State
    data(){
        return {
            text1: 'hello Vue.js',
            text2: 'goodbye jQuery',
            count: 0,
            passLine: 6,
            fInit: true,
            name: 'name'
        }
    },
    // methods: メソッド定義 = Action
    methods: {
        handleClick() {
            this.text2 += " clicked!";
            this.fInit = false;
        },
        increment() {
            this.count++;
            this.fInit = false;
        },
        decrement() {
            this.count--;
            this.fInit = false;
        }
    },
    // computed: 算出プロパティ（関数）
    computed: {
        isInit() {
            return this.fInit;
        },
        isNotInit() {
            if ( this.fInit ) {
                return false;
            }
            return true;
        },
        isPass() {
            return this.count>=this.passLine;
        }
    }
    // template: HTMLテンプレート
    // components: 外部モジュールとして取り込んだコンポーネントを登録
});

console.log("text1="+objVue.text1+" text2="+objVue.text2);
objVue.text2+=" and React";
console.log("text2="+objVue.text2);
objVue.name+=" taro";
console.log("name="+objVue.name);
