import { Quantum, define } from '../../references/quantum.js';
import { select } from '../templates/select.js';

export class Select extends Quantum {
    constructor() {
        super(select);
    }
}

define(Select);