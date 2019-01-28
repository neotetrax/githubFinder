class GitHub {
  constructor() {
    this.client_id = "9025914adde06ee9fd9d";
    this.client_secret = "8fb1cd6cf26ab8eac995b59d5d279ec186ed8b66";
    this.repos_count = 7;
    this.repos_sort = "created: asc";
  }
  //we are two api(One for User & another for repos)
  //? for query String
  async getUsers(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }

}