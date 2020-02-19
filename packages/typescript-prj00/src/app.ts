class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  form: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const inportedNode = document.importNode(this.templateElement.content, true);
    this.form = inportedNode.firstElementChild as HTMLFormElement;
    this.form.id = "user-input";

    this.titleInputElement = this.form.querySelector("#title") as HTMLInputElement;
    this.descriptionInputElement = this.form.querySelector("#description") as HTMLInputElement;
    this.peopleInputElement = this.form.querySelector("#people") as HTMLInputElement;

    this.configure();
    this.renderForm();
  }

  private subminHandler(event: Event) {
    event.preventDefault();

    console.log(this.titleInputElement.value);
  }

  private configure() {
    //this.form.addEventListener("submit", this.subminHandler.bind(this));
    this.form.addEventListener("submit", this.subminHandler);
  }

  private renderForm() {
    this.hostElement.insertAdjacentElement("afterbegin", this.form);
  }
}

const projectInput = new ProjectInput();
