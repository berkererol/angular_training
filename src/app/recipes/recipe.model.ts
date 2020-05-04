export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath
    }




}
const recipeTemplate = (name, desc, img) => {
    return {
        name,
        desc,
        img
    }
}

const recipe1 = recipeTemplate('imamBayildi', 'patlican', 'sex.url')