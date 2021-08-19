export const DEFAULT = Symbol();

export const SWITCH = (fact, cases = {}, ...args) => {
    if (fact in cases) {
        let case_ = cases[fact];
        if (case_ instanceof Function) return case_(...args);
        else return SWITCH(case_, cases, ...args);
    } else {
        let {[DEFAULT]: defaultCase = console.warn} = cases;
        return defaultCase(...args);
    }
};