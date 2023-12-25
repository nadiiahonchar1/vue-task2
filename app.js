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
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    // inputKeyPress(e) {
    //   if (e.key === "Enter") {
    //     this.addHandler();
    //   }
    // },
    removeNote(i) {
      this.notes.splice(i, 1);
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
  },
  computed: {
    upToNotes() {
      return 100 - this.notes.length;
    },
  },
};
Vue.createApp(App).mount("#app");
