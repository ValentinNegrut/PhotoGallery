export default class Title {
  constructor() {
    this.heading = "My photo gallery!";
    this.subHeading = "This is my photo gallery";
  }

  render() {
    return `
      <section class="text-center jumbotron bg-primary">
        <h1 class="title-link text-white">${this.heading}</h1>
        <p class='text-white'>${this.subHeading}</p>
      </section>
   `;
  }
}