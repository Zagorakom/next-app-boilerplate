export function delay(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
