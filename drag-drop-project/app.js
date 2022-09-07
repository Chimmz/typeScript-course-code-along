var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ProjectState = /** @class */ (function () {
    function ProjectState() {
        this.projects = [];
    }
    ProjectState.prototype.addProject = function (title, descr, numOfPeople) {
        var newProject = {
            id: Math.random() + "",
            title: title,
            descr: descr,
            people: numOfPeople
        };
    };
    return ProjectState;
}());
function validate(input) {
    if (input.required)
        return String(input.value).trim().length;
    if (input.minLength && typeof input.value === "string")
        return input.value.length >= input.minLength;
    if (input.maxLength && typeof input.value === "string")
        return input.value.length <= input.maxLength;
    if (input.min && typeof input.value === "number")
        return +input.value >= input.min;
    if (input.max && typeof input.value === "number")
        return +input.value <= input.max;
    return true;
}
var AppInput = /** @class */ (function () {
    // private titleInput: string = ;
    // private descriptionInput: string;
    // private peopleInput: number
    function AppInput() {
        this.templateElement = document.querySelector("#project-input");
        this.renderTemplate = document.querySelector("#app");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.init();
        this.render();
    }
    AppInput.prototype.init = function () {
        this.element.addEventListener("submit", this.submitHandler.bind(this));
    };
    AppInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        var inputs = this.gatherUserInput();
        // console.log(inputs);
    };
    AppInput.prototype.gatherUserInput = function () {
        var titleInput = this.titleInputElement.value;
        var descriptionInput = this.descriptionInputElement.value;
        var peopleInput = this.peopleInputElement.value;
        var validators = { required: true, minLength: 5 };
        if (validate(__assign({ value: titleInput }, validators)) &&
            validate(__assign({ value: descriptionInput }, validators)) &&
            validate(__assign({ value: peopleInput }, validators))) {
            console.log(titleInput, descriptionInput, +peopleInput);
            return [titleInput, descriptionInput, +peopleInput];
        }
        console.log("Error!");
    };
    AppInput.prototype.render = function () {
        this.renderTemplate.insertAdjacentElement("afterbegin", this.element);
    };
    return AppInput;
}());
var inputView = new AppInput();
// ------------ PROJECTS LIST
var ProjectsList = /** @class */ (function () {
    function ProjectsList(type) {
        this.type = type;
        this.templateElement = document.querySelector("#project-list");
        this.renderTemplate = document.querySelector("#app");
        this.init();
        this.render();
    }
    ProjectsList.prototype.init = function () {
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "".concat(this.type, "-projects");
        this.renderTemplate.insertAdjacentElement("beforeend", this.element);
    };
    ProjectsList.prototype.render = function () {
        this.element.querySelector("ul").id = "".concat(this.type, "-projects-list");
        this.element.querySelector("h2").textContent = this.type.toUpperCase() + " PROJECTS";
    };
    return ProjectsList;
}());
var projectsList = new ProjectsList("active");
var projectsList2 = new ProjectsList("finished");
