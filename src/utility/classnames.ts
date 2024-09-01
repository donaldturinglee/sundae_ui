type ClassValue = ClassArray | ClassDictionary | string | number | bigint | null | boolean | undefined;
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];

function toVal(mix: ClassValue): string {
    let str = '';
    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    } else if (typeof mix === 'object') {
        if (Array.isArray(mix)) {
            for (let k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    const y = toVal(mix[k]);
                    if (y) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            }
        } else {
            for (const y in mix) {
                if (mix[y]) {
                    str && (str += ' ');
                    str += y;
                }
            }
        }
    }
    return str;
}

export function classNames(...args: ClassValue[]): string {
    let str = '';
    for (let i = 0; i < args.length; i++) {
        const tmp = args[i];
        if (tmp) {
            const x = toVal(tmp);
            if (x) {
                str && (str += ' ');
                str += x;
            }
        }
    }
    return str;
}

export default classNames;