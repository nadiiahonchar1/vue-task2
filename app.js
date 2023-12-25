const App = {
  data() {
    return {
      title: "List of notes:",
      placeholder: "Enter a title for you note",
      inputValue: "",
      notes: ["Task1", "Task2", "Task3"],
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
    removeNote(i) {
      this.notes.splice(i, 1);
    },
  },
};
Vue.createApp(App).mount("#app");
