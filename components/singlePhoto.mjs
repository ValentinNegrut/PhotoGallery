import Router from "../components/router.mjs";
export default class SinglePhoto {
  constructor(props) {
    this.props = props;
    this.heading = "My photo gallery!";
    document.addEventListener('click', (e) => (e.target && e.target.classList.contains("btn-info")) && this.onTitleLinkClicked(e));
  }

  onTitleLinkClicked(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    console.log(e)
    Router.instance.pushHistory();
  }

  render() {
    return `
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-xs-12">
            <figure class="figure">
              <img src="${this.props.srcImage}" class="figure-img" width="100%">
            </figure>
          </div>
          <div class="col-md-3 col-xs-12 offset-xs-1">
            ${this.props.desc}
            <button data-title="${this.props.title}" data-link="/" class="btn mt-5 py-3 px-5 bg-primary link-button d-block" role="button">Go back!</button>
          </div>
        </div>
      </div>
    `;
  }
}