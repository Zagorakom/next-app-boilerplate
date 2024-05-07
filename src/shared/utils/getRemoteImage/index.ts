import 'server-only';
import { getPlaiceholder } from "plaiceholder";

export const getRemoteImage = async (url: string) => {
    try {
        // const url = 'https://images.unsplash.com/photo-1621961458348-f013d219b50c';
        // const buffer = await fetch(url).then(async res =>
        //     Buffer.from(await res.arrayBuffer()),
        // );
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Failed to fetch image');
        }
    
        const buffer = Buffer.from(await res.arrayBuffer());
    
        const { base64, color, css, metadata, pixels, svg } = await getPlaiceholder(buffer);
    
        return { base64, color, css, metadata, pixels, svg };
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.stack);
        }
    }
};
