Vue.createApp({
  data() {
    return {
      nameUser: "Nguyễn Văn Hoan",
      startDate: "02/04/2023",
    };
  },
}).mount("#interpolation");

Vue.createApp({
  data() {
    return {
      //nameUser: "Nguyên Văn Hoan",
      //startDate: "02/04/2023"
      ImgUrl:
        "https://kynguyenlamdep.com/wp-content/uploads/2022/08/hinh-dai-dien-nam-deo-khau-trang-ngau.jpg",
      LinkInfor: "https://www.facebook.com/vanhoanxomchua",
    };
  },
}).mount("#bind-atrribute");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
Vue.createApp({
  methods: {
    taoSoNut() {
      const mangxx = [
        getRandomInt(1, 6),
        getRandomInt(1, 6),
        getRandomInt(1, 6),
      ];
      const total = mangxx.reduce((tong, xx) => (tong += xx), 0);
      return total;
    },
    renderTaiXiu() {
      const total = this.taoSoNut();
      if (total > 11) return "Tài";
      else return "Xỉu";
    },
  },
}).mount("#method");

Vue.createApp({
  data() {
    return {
      message: `<h1> Học VueJS <h1>`,
    };
  },
}).mount("#RawHTML");

Vue.createApp({
  methods: {
    handleClickMe() {
      console.log("Click me");
      alert("Click me");
    },
    handleIncrement(count) {
      this.count = this.count + 1;
    },
    handleSubmit() {
      alert("Submit");
    },
    handleEnter() {
      alert("Nhấn nút enter");
    },
  },

  data() {
    return {
      count: 0,
    };
  },
}).mount("#event");

Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
  methods: {
    handleInput(event) {
      console.log(event.target.value);
      this.message = event.target.value;
    },
  },
}).mount("#two-way-binding");

Vue.createApp({
  data() {
    return {
      count: 0,
      lastName: "Nguyễn",
      firstName: "Văn Hoan",
    };
  },

  computed: {
    getFullName() {
      return this.lastName + " " + this.firstName;
    },
  },
  watch: {
    count(newvalues, oldvalue) {
      console.log("new Value :" + newvalues);
    },
  },
  methods: {
    handleInput(event) {
      console.log(event.target.value);
      this.message = event.target.value;
    },
    // getFullName() {
    //   return this.lastName + " " + this.firstName;
    // },
    handleIncrement() {
      this.count += 1;
    },
  },
}).mount("#computed-and-watchers");

Vue.createApp({
  data() {
    return {
      active: false,
      bgColor: "red",
      color: "yellow",
      fontsize: 50,
      styleObject: {
        backgroundColor: "red",
        color: "yellow",
        fontSize: "50px",
      },
      styleText: {
        "text-align": "left",
      },
    };
  },
  methods: {
    hanldStyle() {
      this.color = "blue";
    },
    handleActive() {
      this.active = !this.active;
    },
  },
}).mount("#styling");

Vue.createApp({
  data() {
    return {
      isLogin: false,
      nameImg: "img1",
      blackpink: [
        {
          name: "lisa",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmNEBdtqye52v12umwjycRgWZKjq6eP6bbA&usqp=CAU",
        },
        {
          name: "jennie",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmNEBdtqye52v12umwjycRgWZKjq6eP6bbA&usqp=CAU",
        },
        {
          name: "jisoo",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmNEBdtqye52v12umwjycRgWZKjq6eP6bbA&usqp=CAU",
        },
        {
          name: "Rose",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmNEBdtqye52v12umwjycRgWZKjq6eP6bbA&usqp=CAU",
        },
      ],
    };
  },
  methods: {
    hanldLogin() {
      this.isLogin = !this.isLogin;
    },
    handleButton(ten) {
      this.nameImg = ten;
    },
  },
}).mount("#directive");
