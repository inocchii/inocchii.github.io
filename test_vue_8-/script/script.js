// Vue component & root sample
//   View  : UI＆見た目の部分（HTML）
//   Action: Viewからのイベント処理（methods）
//   State : 状態、データを保持（dataプロパティ）
//   Component : 部品（親子）

// サムネイルコンポーネント
const imageThumbnail = Vue.component('image-thumbnail', {
    // props:
    props: {
        path: {
            type: String,
            default: ''
        }
    },
    // template:
    template: `
      <div class="img-box"
        :style="{ backgroundImage: 'url(' + path + ')' }"
        @click="$emit('clickimage')"
      ></div>`
});
// モーダルコンポーネント
const modal = Vue.component('modal', {
    // props:
    props: {
        isShown: {
            type: Boolean,
            default: false
        },
        imagePath: {
            type: String,
            default: ''
        }
    },
    // template:
    template: `
      <div class="modal"
        v-if="isShown"
        @click="$emit('close')"
      >
        <img class="modal-img"
          :src="imagePath"
          alt="selectedImage"
        />
      </div>`
});
// メイン（Root）
const objVue = new Vue({
    // el: Vueのインスタンスを結びつけるHTML要素を指定 = View
    el: '#app',
    // components: 外部モジュールとして取り込んだコンポーネントを登録
    components: {
        'image-thumbnail': imageThumbnail,
        modal   // 省略記法（本来は 'modal': modal）プロパティと値が同じ場合は省略可能
    },
    // data: dataプロパティ（data関数） = State
    data() {
        return {
            isShown: false,
            selectedImage: '',
            images: [{
                path: './img/img1.jpg',
            },{
                path: './img/img2.jpg',
            },{
                path: './img/img3.jpg',
            },{
                path: './img/img4.jpg',
            },{
                path: './img/img5.jpg',
            },{
                path: './img/img6.jpg',
            },{
                path: './img/img7.jpg',
            },{
                path: './img/img8.jpg',
            },{
                path: './img/img9.jpg',
            }]
        };
    },
    // methods: メソッド定義 = Action
    methods: {
        onSelectImage(path) {
            this.setImage(path);
            this.openModal();
        },
        openModal() {
            this.isShown = true;
        },
        closeModal() {
            this.isShown = false;
        },
        setImage(path) {
            this.selectedImage = path;
        }
    }
    // computed: 算出プロパティ（関数）
    // template: HTMLテンプレート
});
console.log("objVue.images="+objVue.images);
