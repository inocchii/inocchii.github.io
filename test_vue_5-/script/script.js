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
            // 配列
            fruits: ['りんご','ぶどう','いちご','パイナップル'],
            // オブジェクト
            obj: {
                name: "taro",
                age: 30,
                like: "sushi"
            },
            // オブジェクトの配列
            items: [
                { id: 1, label: "子" },
                { id: 2, label: "丑" },
                { id: 3, label: "寅" }
            ],
            // メニューの例
            menus: [
                {label: 'TOP',      path: './index.html'},
                {label: 'ABOUT',    path: './about.html'},
                {label: 'SCHEDULE', path: './schedule.html'},
                {label: 'CONTACT',  path: './contact.html'}
            ]
        }
    },
    // methods: メソッド定義 = Action
    methods: {
        // オブジェクトを変化させてリストを変化させる
        handleClick() {
            this.menus[0].label += "P";
        },
        // 配列を増減させてリストを増減させる
        handleClick2(arg) {
            if (arg=="push") {
                this.menus.push({label:"NEXT", path:"./next.html"});
            } else if (arg=="pop") {
                this.menus.pop();
            } else if (arg=="shift") {
                this.menus.shift();
            } else {
                this.menus.unshift({label:"HIGH", path:"./high.html"});
            }
        }
    }
    // computed: 算出プロパティ（関数）
    // template: HTMLテンプレート
    // components: 外部モジュールとして取り込んだコンポーネントを登録
});
console.log("objVue.fruits="+objVue.fruits);
console.log("objVue.obj.name="+objVue.obj.name);
console.log("objVue.obj['name']="+objVue.obj['name']);
