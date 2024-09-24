<template>
  <div>
    <section v-if="loading">در حال بارگزاری...</section>
    <section v-else>
      <h3 class="text-center">{{ title }}</h3>
      <div class="row m-0 mt-5">
        <div class="col-xl-3 col-lg-4 col-md-6 mt-3" v-for="news in newsList" :key="news.title">
          <div class="card bg-dark text-light shadow">
            <img height="200" :src="news.enclosure['@attributes'].url" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 style="height:150px" class="card-title">{{ news.title }}</h5>
              <p class="card-text"></p>
              <a :href="news.link" class="btn btn-primary">مشاهده بیشتر</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script>
export default {
  data() {
    return {
      title: null,
      loading: true,
      newsList: [],
    }
  },
  mounted() {
    this.getNews()
  },
  methods: {
    getNews() {
      this.axios.get('https://one-api.ir/rss/?token=299279:66d1e9f9c94a9&action=mehr')
        .then((response) => {
          this.title = response.data.result.title
          this.newsList = response.data.result.item
          this.loading = false
        }).catch((error) => {
          console.log(error.response);
        })
    }
  }
}
</script>