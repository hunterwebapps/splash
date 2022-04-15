class ProjectCard extends HTMLElement {
  connectedCallback() {
    const position = this.attributes['image-position'];
    const { target, thumbnail, label } = this.attributes;

    const style = `background: url('${thumbnail.value}') no-repeat; background-size: cover;`;

    this.innerHTML = `
      <a href="${target.value}">
        <section class="project">
          <div class="box image-${position.value}" style="${style}">
          </div>
          <div class="box">
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
