// local storage keys
const MOVIE_WATCHLIST_KEY = "moviewatchlist-storage-key";

// Vue instance
Vue.createApp({
  data() {
    return {
      search: "",
      watchListArray: [],
    };
  },

  methods: {
    removeFromWatchList(id) {
      // get existing array
      this.watchListArray = JSON.parse(
        localStorage.getItem(MOVIE_WATCHLIST_KEY)
      );

      // remove selected movie from array
      this.watchListArray = this.watchListArray.filter(function (movie) {
        return movie.id != id;
      });

      // add updated array to local storage
      localStorage.setItem(
        MOVIE_WATCHLIST_KEY,
        JSON.stringify(this.watchListArray)
      );
    },

    navToHome() {
      window.location.href = "../pages/home.html";
    },

    navToMovies() {
      window.location.href = "../pages/movies.html";
    },

    navToSeries() {
      window.location.href = "../pages/series.html";
    },

    logout() {
      window.location.href = "../../index.html";
    },
  },

  computed: {
    filteredWatchList() {
      return this.watchListArray.filter((movie) => {
        return movie.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    if (!localStorage.getItem(MOVIE_WATCHLIST_KEY)) {
      let initArray = [];
      localStorage.setItem(MOVIE_WATCHLIST_KEY, JSON.stringify(initArray));
    }

    this.watchListArray = JSON.parse(localStorage.getItem(MOVIE_WATCHLIST_KEY));

    // sort my watchlist alphabetically
    this.filteredWatchList.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });
  },
}).mount("#app");
