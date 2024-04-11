export type TAlgorithm = 'FisherYates' | 'Durstenfeld';

export type TShuffleConfig = {
	algorithm?: TAlgorithm,
    mutateOrigin?: boolean,
};

const defaultConfig: TShuffleConfig = {
    algorithm: 'Durstenfeld',
    mutateOrigin: false,
};

export const shuffle = (
    arr: Array<any>,
    config?: TShuffleConfig,
) => {
    const finalConfig = {
        ...defaultConfig,
        ...config,
    };
    if (finalConfig.algorithm === 'Durstenfeld') {
        return shuffleDurstenfeld(arr, finalConfig);
    } else {
        return shuffleFisherYates(arr, finalConfig);
    }
}

function shuffleFisherYates(arr: Array<any>, config: TShuffleConfig) {
    const array = config.mutateOrigin ? arr : [...arr];
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle
    while (currentIndex > 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    console.log({
        algorithm: 'FisherYates',
        origin: arr,
        result: array,
    });
    return array;
}

function shuffleDurstenfeld(arr: Array<any>, config: TShuffleConfig) {
    const array = config.mutateOrigin ? arr : [...arr];

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    console.log({
        algorithm: 'Durstenfeld',
        origin: arr,
        result: array,
    });
    return array;
}
