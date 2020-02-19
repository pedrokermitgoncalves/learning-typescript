class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  form: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    this.form = document.importNode(this.templateElement.content, true)
      .firstElementChild as HTMLFormElement;

    this.renderForm();
  }

  private renderForm() {
    this.hostElement.insertAdjacentElement("afterbegin", this.form);
  }
}

const projectInput = new ProjectInput();
