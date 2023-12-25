const App = {
  data() {
    return {
      title: "List of notes:",
      placeholder: "Enter a title for you note",
      inputValue: "",
      notes: [],
    };
  },
  //Список методів застосунку
  methods: {
    inputChangeHandler(e) {
      this.inputValue = e.target.value;
    },
    addHandler() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },
    // inputKeyPress(e) {
    //   if (e.key === "Enter") {
    //     this.addHandler();
    //   }
    // },
  },
};
Vue.createApp(App).mount("#app");
