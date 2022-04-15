class ProjectCard extends HTMLElement {
  connectedCallback() {
    const position = this.attributes['image-position'];
    const { target, thumbnail, label } = this.attributes;

    const styles = `
      background: url('${thumbnail.value}') no-repeat;
      background-size: cover;
    `;

    const boxClass = `box image-${position.value}`;

    this.innerHTML = `
      <a href="${target.value}">
        <section class="project">
          <div class="${boxClass}" style="${styles}">
          </div>
          <div class="box bg-primary">
            <p class="title">
              ${label.value}
            </p>
          </div>
        </section>
      </a>
    `;
  }
}

customElements.define('project-card', ProjectCard);
