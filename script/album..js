new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "image/Tour1.jpeg",
          img2: "image/Tour2.jpeg",
          img3: "image/Tour3.jpeg",
          title: "TOUR",
          isOpen: false,
        },
        {
          img1: "image/khatam1.jpeg",
          img2: "image/khatam2.jpeg",
          img3: "image/khatam3.jpeg",
          title: "KHATAM AL-QURAN",
          isOpen: false,
        },
        {
          img1: "image/kuta1.jpeg",
          img2: "image/kuta2.jpeg",
          img3: "image/kuta3.jpeg",
          title: "KUTA MALAKA",
          isOpen: false,
        },
        {
          img1: "image/agustusan1.jpeg",
          img2: "image/agustusan2.jpeg",
          img3: "image/agustusan3.jpeg",
          title: "AGUSTUSAN",
          isOpen: false,
        },
        {
          img1: "image/aurora1.jpg",
          img2: "image/aurora2.jpg",
          img3: "image/aurora3.jpg",
          title: "ADD NEW TEXT",
          isOpen: false,
        },
        {
          img1: "image/sky1.jpg",
          img2: "image/sky2.jpg",
          img3: "image/sky3.jpg",
          title: "ADD NEW TEXT",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});