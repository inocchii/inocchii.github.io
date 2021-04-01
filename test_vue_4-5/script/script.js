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
            name: 'name',
            tel: '00',
            email1: 'email1',
            email2: 'email2',
            email3: 'email3'
        }
    },
    // methods: メソッド定義 = Action
    methods: {
        // メールセットを汎用化（双方向バインディングしているので各々の変化時に各々のイベントが発生している？）
        setEmailAny(e) {
            this[e.target.name] = e.target.value;
        },
        // メールチェックを汎用化
        isInValidEmailAny(argNm) {
            console.log("arg="+argNm+" val="+this[argNm]);
            return this.isInvalidEmail(this[argNm]);
            //const regex = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)
            //return !regex.test(this[argNm]);
            //return !regex.test(this.email2);
        },
        // メールチェック用正規表現チェックを切り出し
        isInvalidEmail(argMail) {
            const regex = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);
            return !regex.test(argMail);

        }
    },
    // computed: 算出プロパティ（関数）
    computed: {
        isInValidName() {
            return this.name.length < 4;
        },
        isInValidTel() {
            const tel = this.tel;
            const isErr = tel.length < 8 || isNaN(Number(tel));
            return isErr;
        },
        isInValidEmail1() {
            return this.isInvalidEmail(this.email1);
            //const regex = new RegExp(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i);
            //return !regex.test(this.email1);
        }
    }
    // template: HTMLテンプレート
    // components: 外部モジュールとして取り込んだコンポーネントを登録
});

console.log("name="+objVue.name);
