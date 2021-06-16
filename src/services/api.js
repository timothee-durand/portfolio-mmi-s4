//from https://itnext.io/vue-tricks-smart-api-module-for-vuejs-b0cae563e67b
import params from "@/param/params.js";

class BaseApiService {
    baseUrl = params.host;
    resource;

    constructor(resource) {
        if (!resource) throw new Error("Resource is not provided");
        this.resource = resource;
    }

    getUrl(id = "") {
        return `${this.baseUrl}/${this.resource}/${id}`;
    }

    handleErrors(err) {
        // Note: here you may want to add your errors handling
        console.log({ message: "Error on api resolving", err });
    }
}

class ReadOnlyApiService extends BaseApiService {
    constructor(resource) {
        super(resource);
    }
    async fetch(config = {}) {
        try {
            const response = await fetch(this.getUrl(), config);
            return await response.json();
        } catch (err) {
            this.handleErrors(err);
        }
    }
    async get(id) {
        try {
            if (!id) throw Error("Id is not provided");
            const response = await fetch(this.getUrl(id));
            return await response.json();
        } catch (err) {
            this.handleErrors(err);
        }
    }
}

// class ModelApiService extends ReadOnlyApiService {
//     constructor(resource) {
//         super(resource);
//     }
//     async post(data = {}) {
//         try {
//             const response = await fetch(this.getUrl(), {
//                 method: "POST",
//                 body: JSON.stringify(data)
//             });
//             const { id } = response.json();
//             return id;
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
//     async put(id, data = {}) {
//         if (!id) throw Error("Id is not provided");
//         try {
//             const response = await fetch(this.getUrl(id), {
//                 method: "PUT",
//                 body: JSON.stringify(data)
//             });
//             const { id: responseId } = response.json();
//             return responseId;
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
//     async delete(id) {
//         if (!id) throw Error("Id is not provided");
//         try {
//             await fetch(this.getUrl(id), {
//                 method: "DELETE"
//             });
//             return true;
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
// }

// inspired by https://itnext.io/vue-tricks-smart-api-module-for-vuejs-b0cae563e67b

//projects
class ProjectsApiService extends ReadOnlyApiService {
    constructor() {
        super("projet");
    }
}

//skills
class SkillsApiService extends ReadOnlyApiService {
    constructor() {
        super("competence");
    }
}

//courses
class CoursesApiService extends ReadOnlyApiService {
    constructor() {
        super("formation");
    }
}

//pens
class PenApiService extends ReadOnlyApiService {
    constructor() {
        super("pen");
    }
}

export const $api = {
    projects: new ProjectsApiService(),
    skills: new SkillsApiService(),
    courses: new CoursesApiService(),
    pens : new PenApiService()
};

