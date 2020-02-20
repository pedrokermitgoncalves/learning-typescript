/// <reference path="state/state.ts" />
/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/project-list.component.ts" />
/// <reference path="components/project-input.component.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
