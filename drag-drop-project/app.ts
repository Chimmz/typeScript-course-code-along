class ProjectState {
   private projects: any[] = [];

   public addProject(title: string, descr: string, numOfPeople: number) {
      const newProject = {
         id: Math.random() + "",
         title,
         descr,
         people: numOfPeople,
      };
   }
}

interface Validatable {
   value: number | string;
   required?: boolean;
   minLength?: number;
   maxLength?: number;
   min?: number;
   max?: number;
}

function validate(input: Validatable) {
   if (input.required) return String(input.value).trim().length;
   if (input.minLength && typeof input.value === "string")
      return input.value.length >= input.minLength;

   if (input.maxLength && typeof input.value === "string")
      return input.value.length <= input.maxLength;
   if (input.min && typeof input.value === "number") return +input.value >= input.min;

   if (input.max && typeof input.value === "number") return +input.value <= input.max;
   return true;
}

class AppInput {
   private templateElement: HTMLTemplateElement;
   private renderTemplate: HTMLDivElement;
   private element: HTMLFormElement;
   titleInputElement: HTMLInputElement;
   descriptionInputElement: HTMLInputElement;
   peopleInputElement: HTMLInputElement;
   // private titleInput: string = ;
   // private descriptionInput: string;
   // private peopleInput: number

   constructor() {
      this.templateElement = <HTMLTemplateElement>document.querySelector("#project-input");
      this.renderTemplate = document.querySelector("#app")! as HTMLDivElement;

      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.element.id = "user-input";
      this.titleInputElement = this.element.querySelector("#title") as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement;
      this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement;
      this.init();
      this.render();
   }
   private init() {
      this.element.addEventListener("submit", this.submitHandler.bind(this));
   }
   private submitHandler(this: AppInput, event: Event) {
      event.preventDefault();
      const inputs = this.gatherUserInput();
      // console.log(inputs);
   }
   private gatherUserInput(): [string, string, number] | void {
      const titleInput = this.titleInputElement.value;
      const descriptionInput = this.descriptionInputElement.value;
      const peopleInput = this.peopleInputElement.value;
      const validators = { required: true, minLength: 5 };
      if (
         validate({ value: titleInput, ...validators }) &&
         validate({ value: descriptionInput, ...validators }) &&
         validate({ value: peopleInput, ...validators })
      ) {
         console.log(titleInput, descriptionInput, +peopleInput);
         return [titleInput, descriptionInput, +peopleInput];
      }
      console.log("Error!");
   }

   private render() {
      this.renderTemplate.insertAdjacentElement("afterbegin", this.element);
   }
}

const inputView = new AppInput();

// ------------ PROJECTS LIST

class ProjectsList {
   private templateElement: HTMLTemplateElement;
   private renderTemplate: HTMLDivElement;
   private element: HTMLElement;

   constructor(private type: "active" | "finished") {
      this.templateElement = <HTMLTemplateElement>document.querySelector("#project-list");
      this.renderTemplate = document.querySelector("#app")! as HTMLDivElement;
      this.init();
      this.render();
   }
   private init() {
      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLElement;
      this.element.id = `${this.type}-projects`;
      this.renderTemplate.insertAdjacentElement("beforeend", this.element);
   }
   private render() {
      this.element.querySelector("ul")!.id = `${this.type}-projects-list`;
      this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + " PROJECTS";
   }
}

const projectsList = new ProjectsList("active");
const projectsList2 = new ProjectsList("finished");
