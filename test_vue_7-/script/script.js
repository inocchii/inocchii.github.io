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
            // 開始は空の配列
            todos: [],
            text: ''
        };
    },
    // methods: メソッド定義 = Action
    methods: {
        // 入力
        inputText(e) {
            this.text = e.target.value;
        },
        // TODO追加
        addTodo() {
            if ( !this.text ) return;

            const text = this.text;
            const id = Math.ceil(Math.random() * 1000);
            const todo = { id, text, isDone: false };
            this.todos.push(todo);
            this.resetText();
        },
        // 入力蘭クリア
        resetText() {
            this.text = '';
        },
        // 削除
        deleteTodo(id) {
            // 対象TODOの位置を取得
            const index = this.getIndexBy(id);
            // 配列から該当箇所を削除（位置とそこからの件数）
            this.todos.splice(index, 1);
        },
        // 完了に
        toggleIsDone(id) {
            // 対象TODOの位置を取得
            const index = this.getIndexBy(id);
            // 配列の該当TODOのisDone値を変更
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        // TODOの位置を取得
        getIndexBy(id) {
            const filteredTodo = this.todos.filter(todo => todo.id === id)[0];
            const index = this.todos.indexOf(filteredTodo);
            return index;
        }
    },
    // computed: 算出プロパティ（関数）
    computed: {
        doneTodo() {
            // 配列の抽出メソッドで条件合致分だけを取得
            return this.todos.filter( todo => { return todo.isDone === true; } );
        },
        incompleteTodo() {
            // 配列の抽出メソッド（省略形）
            return this.todos.filter( todo => todo.isDone === false);
        }
    }
    // template: HTMLテンプレート
    // components: 外部モジュールとして取り込んだコンポーネントを登録
});
console.log("objVue.bindStyle="+objVue.bindStyle);
