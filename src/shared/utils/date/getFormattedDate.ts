export type TPattern =
    'yyyy.mm.dd' | 'yyyy.dd.mm' | 'dd.mm.yyyy' | 'mm.dd.yyyy' | 'dd.mm' | 'mm.dd' | 'yyyy.mm' | 'mm.yyyy' |
    'yyyy/mm/dd' | 'yyyy/dd/mm' | 'dd/mm/yyyy' | 'mm/dd/yyyy' | 'dd/mm' | 'mm/dd' | 'yyyy/mm' | 'mm/yyyy' |
    'yyyy|mm|dd' | 'yyyy|dd|mm' | 'dd|mm|yyyy' | 'mm|dd|yyyy' | 'dd|mm' | 'mm|dd' | 'yyyy|mm' | 'mm|yyyy' |
    'yyyy-mm-dd' | 'yyyy-dd-mm' | 'dd-mm-yyyy' | 'mm-dd-yyyy' | 'dd-mm' | 'mm-dd' | 'yyyy-mm' | 'mm-yyyy' | undefined;

export type TParams = {
	date: string | number | Date;
	pattern?: TPattern;
};

const isValidDate = (date: any) => {
    return date instanceof Date && !isNaN(+date);
};

const getSeparator = (pattern: TPattern) => {
    if (pattern?.includes('.')) {
        return '.';
    } else if (pattern?.includes('/')) {
        return '/';
    } else if (pattern?.includes('|')) {
        return '|';
    } else if (pattern?.includes('-')) {
        return '-';
    } else {
        return '.';
    }
};

export const getFormattedDate = ({date, pattern = 'yyyy.mm.dd'}: TParams) => {
    const dateObject = new Date(date);

    if (!isValidDate(dateObject)) {
        return 'yyyy.mm.dd';
    }

    const dateValues: any = {
        dd: (`${dateObject?.getDate()}`.length === 1) ? `0${dateObject?.getDate()}` : `${dateObject?.getDate()}`,
        mm: (`${dateObject?.getMonth() + 1}`.length === 1) ? `0${dateObject?.getMonth() + 1}` : `${dateObject?.getMonth() + 1}`,
        yyyy: `${dateObject?.getFullYear()}`,
    };

    const separator = getSeparator(pattern);

    return pattern.split(separator).map(p => dateValues[p]).join(separator);
};
