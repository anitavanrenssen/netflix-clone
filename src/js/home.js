import { Movie } from "../classes/Movie.js";

// local storage keys
const MOVIE_WATCHLIST_KEY = "moviewatchlist-storage-key";

// Vue instance
Vue.createApp({
  data() {
    return {
      movieList: [
        new Movie(
          "E1496",
          "Hold Your Breath: The Ice Dive",
          "Documentary",
          "40m",
          true,
          "03 / 06 / 2022",
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYXsiVzvpa431ZLZHtrFj8_JJCopbc9xBPP3H6MRaJEPKRGS_x_jaoibQrZTgbntAnw1oDRaR1X-iMyKKZ-ON-hL0KwV.webp?r=4ed",
          null,
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUs8JhtTn1PxXcsMiL0gbY5z2-3unTD4KO-FCQKdNnJzsrlS4f6UXZdaaDNXDm_Adf8anreYvIj01qSebAUoB6Hw-BFpoqawgnAtWFlivHPEUAG5af-UEv6uFxe1dWbOuaSD97jT0Ei09q8s_Tc65CbKzpkLzDx2zKxsqFs9A5nNDA.webp?r=1f0"
        ),
        new Movie(
          "E1874",
          "Return to Space",
          "Documentary",
          "2h 8m",
          false,
          "10 / 03 / 2022",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*8071*7418_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYH*%5DVaslY2jDwBZD5S4MZZBBjdjxE3qv6Js%5DItP2VM3kYQpLNGO7TlgyLrDOL8EFW9KnVyvFzZlYCg2wsc2QnWcMS2T99xs1sVIDYHjv*7au67%5D8qPYYqNnD5Vwn.jpg",
          null,
          null
        ),
        new Movie(
          "E3319",
          "FYRE",
          "Documentary",
          "1h 37m",
          false,
          "18 / 01 / 2019",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*739*58_8_muochl_mvg%5Bwmn%5Bzkr%5Be4%5Bivmwrgrlm%5B587v5880uy787v6xz0u8zww441v7v2uvw57u1uy5%5BZZZZYIzETxRUAwaaJBwByjDGWDkUXPg9QLSQdYNITIslkczyg*qo5tXsBWWACZhquof*NL8UrwypQgRSCwLPHEliDnfSAveXfO1nJGFjc7t4yV6cpDPzdYqHxUy1yH6UGV0zOXc9d0qUGd.jpg",
          null,
          null
        ),
        new Movie(
          "E6598",
          "Icarus",
          "Documentary",
          "2h 1m",
          false,
          "04 / 10 / 2017",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*8566*8567_8_muochl_mvg%5Bzig%5B54y6y%5B79209yyz5uu4z892ww32x9wyv460w98ux8554y6y.jpg",
          null,
          null
        ),
        new Movie(
          "E7457",
          "The Tinder Swindler",
          "Documentary",
          "1h 54m",
          false,
          "02 / 02 / 2022",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*739*231_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYumltlbzVXCiHKm5SjgbU%5DaokPmcgWm*F*U9%5DSTDhQ4neOuKCoqORAn9P3X1LeY3hP*jyyEJuwsmfrM3sBWZhCSnskoCUocBOwCfQlsis7x*GyHVwdA00ZYFX3hv.jpg",
          null,
          null
        ),
        new Movie(
          "E7459",
          "The Short Game",
          "Documentary",
          "1h 40m",
          false,
          "04 / 10 / 2017",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*850*230_8_muochl_mvg%5Bzig%5Bxy6w7%5B59531v9u53409u254354746v324y3uxw243xy6w7.jpg",
          null,
          null
        ),
        new Movie(
          "E7894",
          "Hot Pursuit",
          "Comedy",
          "1h 27m",
          false,
          "31 / 03 / 2022",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*7375*67_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYwzD5j*HJoJ4CGHY77TRMR1VY8ZnzO%5DsIBQ1Y8DsQstjGW0XbBXhWu6WK2iDb1EZHtQZxoOuyfhLmSi7i747ot3vNud.jpg",
          null,
          null
        ),
        new Movie(
          "E7804",
          "Johnny English Reborn",
          "Comedy",
          "1h 41m",
          false,
          "01 / 07 / 2019",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*67*65_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B9WD3XwV5tBgBc1rb6zq1th0DgCV%5BZZZZYu*aTlkRbfqwbkT5G*Gx%5Dc%5DjLjxfEspcUjm9dbNqCIXr1kI4ocEcxBI17e1Rn1FBUCCl9zY*0t6mhHjJIMEyqiAF4*WBIu2Z.jpg",
          null,
          null
        ),
        new Movie(
          "E1409",
          "Forrest Gump",
          "Comedy",
          "2h 23m",
          false,
          "01 / 06 / 2021",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*7079*8259_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYHBVZz17HY1kdRlsAaWpcDpevTKEL5*cO1QyMPSGX3J00*9rYy7*epdloNzO*gW*7nEkcEWxM6czy3zPSR1*i8pdU41.jpg",
          null,
          null
        ),
        new Movie(
          "E0467",
          "The Ugly Truth",
          "Comedy",
          "1h 36m",
          false,
          "31 / 08 / 2019",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*251*8998_8_muochl_mvg%5Bzig%5By7838%5B55841v448w929w1uwuu55v3xv11zv4w065yy7838.jpg",
          null,
          null
        ),
        new Movie(
          "E8811",
          "Home Team",
          "Comedy",
          "1h 39m",
          false,
          "28 / 01 / 2022",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*09*07_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYyabCA7P*Ja5zo1%5DLHT3WznxAXlP4zV42d1sQl6cMu%5DsqjN2SgGd3e81k3NYMYTUHi25tKIZ9kqvVQdFHB3*jGhtc5QRBpExalR9lSPW42cxBOYtQiRifcSLNuVCgdFweorijzia3EsbG0hm0NANiLBv0EKe210lT0qIK*Hx0Hl8Ahp%5DnsGIqtF.jpg",
          null,
          null
        ),
        new Movie(
          "E0198",
          "Set it Up",
          "Comedy",
          "1h 45m",
          true,
          "31 / 05 / 2022",
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWD9B3K8UJHV_n34vbzOoiKhqi1TfMKHvP6Sa8TAPNOx9Qx2VcVlZIX4RyPbeEbx_cMzZ9ODMtAuNxgGySkWcV6K13Eu.webp?r=a0f",
          null,
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRLuK2fLuHHO1xXaOj6VFBj5PiQhcXgLnR4w_pgnUcaDyA0B7HFVaru5zPJY859lxGYNgt05sHWycVYtDk_2xu8hSxMeIW_2ZX-_TxdIE0zr305dg_1BvWOPt6cVl7ruIwlymrmaNO31i-X4KwyUE4HDkCrf3XKSu_T3OzSz0n4YTQ.webp?r=cc1"
        ),
        new Movie(
          "E4681",
          "A Beautiful Mind",
          "Drama",
          "2h 16m",
          false,
          "01 / 05 / 2020",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*8146*699_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYur115bXK1870sxQjJCObyxWWmqXH4ExoB%5DtmxxFPkqKEES1oRtz2G*dH7gT1QJTcjb8iwd2Fdix5N*rezbhf%5DOPkaR.jpg",
          null,
          null
        ),
        new Movie(
          "E5581",
          "Seven Years in Tibet",
          "Drama",
          "2h 16m",
          false,
          "30 / 11 / 2018",
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTpwCWcqhfA6R8k_D2V9ZvvJYPTLF5-WowPD75VGGvyg7Y4HQMABzlwnyICLrPoiR26F7nRAKF4KaDNCAatHuL96bfg.webp?r=9a6",
          null,
          null
        ),
        new Movie(
          "E1170",
          "The Pursuit of Happyness",
          "Drama",
          "1h 57m",
          false,
          "30 / 03 / 2022",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*7731*639_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYvso8Uoru1CSZrJuzerrY85TcsTsAEV7p8%5DOonlKHgGJ8YGUcSNgjNrmvNMRPMb2ByXTAyC5Hu5Ot*HitIJsiBI4155.jpg",
          null,
          null
        ),
        new Movie(
          "E9951",
          "The Best of Me",
          "Drama",
          "1h 58m",
          false,
          "18 / 04 / 2022",
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcETNf2c10AmRC_NZcJv_Gy2Ike2VcfRd4FSfl6O-29KUqXNQ2UszIcXrZhp5ux9QAo8tUxA4FZGf7Xfld8BqXCbTcDLLEesnHdMUCnzKm5t8Y79vKk3us0tRzUVbgXCjToFizoLC3lTCI5Zez-vhIfrWp4.webp?r=b61",
          null,
          null
        ),
        new Movie(
          "E1141",
          "Bohemian Rhapsody",
          "Drama",
          "2h 14m",
          false,
          "01 / 08 / 2021",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*011*006_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B2v9KGEWwQ34vfnbaztDrQPrd3NF%5BZZZZYz9RuF7fmHuXFIXSi28oFobY1vvIDJPaVutDUimbh49nPUW7DFTBCh68lhXkXgH*efV5A8y*5nchjtoaFlRl*k2h1fZ.jpg",
          null,
          null
        ),
        new Movie(
          "E7712",
          "Jumanji - Welcome to the Jungle",
          "Drama",
          "1h 59m",
          true,
          "13 / 07 / 2022",
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT57LyOsjWOnVvK_tEcoQGBv43xLpZ3u1YX7rpAeuTGKKqmQPCM9NQqU6-zAfjl3kfMPeCKeeYyJrTaq_0jDz613JFbu.webp?r=33d",
          null,
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUG3fJhz3ZoidVh8YLnuZmaRCejnuM4rMvpLKeb0F3wCKCqgW4A5rRPDAQ5xML9nJmMpzimgz8yx-InR6Gy4M2-sFgK8I0V-ilk.webp?r=5d0"
        ),
        new Movie(
          "E0153",
          "Red Notice",
          "Action",
          "1h 57m",
          false,
          "18 / 04 / 2022",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*011*604_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B2v9KGEWwQ34vfnbaztDrQPrd3NF%5BZZZZYCgWvkKSeFm35aBBfD7oiKDDWcGcM0PBqJiEC72Op6AEztVcfpkXGBeciIeb4SToNO2uGPgqq%5D2PpxyvgJi5XaM4l1xBzo*t%5DKORjiH3G9K5zX0RtcZK9AGq5ZpPe8yBaPhCIeYU4YRu7fQp1R9BSfC5mXLIkekIwen*LmgV5QaIiHTzvD2%5DmpZ.jpg",
          null,
          null
        ),
        new Movie(
          "E3396",
          "Inside Man",
          "Action",
          "2h 8m",
          false,
          "14 / 10 / 2019",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*65*67_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B9WD3XwV5tBgBc1rb6zq1th0DgCV%5BZZZZYAEvf0LYnZq*CEWia3m*2gSw1M5X%5D35BtirsEysz0jKpN89DnvZffoEHmUeeksBmwP1Eh8Elh2E8RZbJNa53y%5DH3Msp.jpg",
          null,
          null
        ),
        new Movie(
          "E4881",
          "The Tourist",
          "Action",
          "1h 43m",
          false,
          "31 / 07 / 2018",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*239*58_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B9WD3XwV5tBgBc1rb6zq1th0DgCV%5BZZZZYJE1Q878SvMf9CxuakuWSIhZLpzal%5DjUWD9jA5N5Eh96twUuLCnq3bkVYD8km3Auw8JIq3DHz7VsnFldLeT4ymTg9Cx.jpg",
          null,
          null
        ),
        new Movie(
          "E7711",
          "Gladiator",
          "Action",
          "2h 35m",
          false,
          "01 / 07 / 2020",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*41*35_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYvV*mfWgGQumbfvYO*DXZuvZ8Yk2O2qEf0jA0Rr0sc9veSNvj05gQNrF6Kq6eOMh5kIf5IMQhA4Y*NOkrr%5Do2VJOXw9.jpg",
          null,
          null
        ),
        new Movie(
          "E1024",
          "Saving Private Ryan",
          "Action",
          "2h 49m",
          false,
          "15 / 09 / 2020",
          "https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*7294*7293_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYHiLHTVKJvHoHKiy1Dk0MPWhYUrjqt1Y5JXQumVIYWcr8rQgQG**0lrVRJcgDjGKt*ho0VStE0o%5DNN5GuDRkbnyBflV.jpg",
          null,
          null
        ),
        new Movie(
          "E1440",
          "How It Ends",
          "Action",
          "1h 53m",
          true,
          "22 / 07 / 2022",
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeATRG3Uixdtlol52VDyrD2Elzrl7dI4wAo_0GWecEp3XgNxayAYWRzK4d53wfwBqj6C8lxbovbmImus8O7jvGP8a5S7.webp?r=b73",
          null,
          "https://occ-0-3096-32.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABURPZ42fRNTQQNkvv_F193OkpjweuFtOy3RRlAXWsobyakQEmdoY7_zhXGuTem8tp_zdd4j-JOUhPSdyMIH1rzf8CEjJtgwR51Yr6gZNtin4hu8jWE7T-59MWzPvIiz65FESDTuD8hwO3CZcHiQ22GkWXb2x7zaejIIPgfYdlpTsWA.webp?r=f87"
        ),
      ],
    };
  },

  computed: {
    comingSoonList() {
      return this.movieList.filter((movie) => {
        return movie.comingSoon;
      });
    },
    availableList() {
      return this.movieList.filter((movie) => {
        return !movie.comingSoon;
      });
    },

    documentaryList() {
      return this.movieList.filter((movie) => {
        return movie.genre === "Documentary" && !movie.comingSoon;
      });
    },

    comedyList() {
      return this.movieList.filter((movie) => {
        return movie.genre === "Comedy" && !movie.comingSoon;
      });
    },

    dramaList() {
      return this.movieList.filter((movie) => {
        return movie.genre === "Drama" && !movie.comingSoon;
      });
    },

    actionList() {
      return this.movieList.filter((movie) => {
        return movie.genre === "Action" && !movie.comingSoon;
      });
    },
  },

  methods: {
    addToWatchList(id) {
      // if MOVIE_WATCHLIST_KEY is empty, create new array
      if (!localStorage.getItem(MOVIE_WATCHLIST_KEY)) {
        let watchListArray = [];

        // find selected movie in movie list
        let watchListMovie = this.movieList.find(function (movie) {
          return movie.id == id;
        });

        // add selected movie to array
        watchListArray.push(watchListMovie);

        // add array to local storage
        localStorage.setItem(
          MOVIE_WATCHLIST_KEY,
          JSON.stringify(watchListArray)
        );
      } else {
        // if MOVIE_WATCHLIST_KEY exits, get existing array
        let watchListArray = JSON.parse(
          localStorage.getItem(MOVIE_WATCHLIST_KEY)
        );

        // find selected movie in movie list
        let watchListMovie = this.movieList.find(function (movie) {
          return movie.id == id;
        });

        // check if movie already exits in array to prevent duplicate
        let movieExists = watchListArray.some(
          (obj) => obj.id === watchListMovie.id
        );

        // if movie does not exist, add selected movie to array
        if (!movieExists) {
          watchListArray.push(watchListMovie);

          // add array to local storage
          localStorage.setItem(
            MOVIE_WATCHLIST_KEY,
            JSON.stringify(watchListArray)
          );
        }
      }
    },

    navToHome() {
      window.location.href = "../pages/home.html";
    },

    navToWatchList() {
      window.location.href = "../pages/mylist.html";
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
}).mount("#app");
