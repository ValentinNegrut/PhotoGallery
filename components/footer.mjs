export default class Footer {
  constructor(props) {
    this.props = props;
    // this.heading = "My photo gallery!";

  }

  render() {
    return `
    <div class="card text-center">
        <div class="card-header bg-primary py-4">
            Images are taken from <a class="text-light" href ="https://pixabay.com/ro//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7332860">Pixabay</a>
            <p class="mt-1 mb-0">The project presented is demonstrative. Some elements, such as images, are copyrighted and are used with permission of the owners.</p>
            <p class="mt-1 mb-0">Copyright &copy; 2023 by Negrut Valentin-Mihai | All Rights Reserved.</p>
        </div>
    </div>
    `;
  }
}