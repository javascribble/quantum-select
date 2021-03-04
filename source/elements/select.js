export class Select extends Quantum {
    constructor() {
        super();

        // if (event.ctrlKey) {
        //     elements.forEach(toggleSelection);
        // } else if (event.shiftKey) {
        //     // TODO: Add shift selection.
        // } else {
        //     queryAll(tree, `[${attribute}]`).forEach(deselect);
        //     elements.forEach(select);
        // }
    }

    static get observedAttributes() { return ['selected']; }
}