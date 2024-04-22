type TNavigationItem = {
	labelText: string;
    labelTranslationKey: string;
    url: string;
    isNew: boolean;
};

type TNavigationList = Array<TNavigationItem>;

const NAVIGATION_LIST: TNavigationList = [ // for header and burger menu
    {
        labelText: 'About',
        labelTranslationKey: 'labels.about',
        url: '/about',
        isNew: false,
    },
    {
        labelText: 'Foo',
        labelTranslationKey: 'labels.foo',
        url: '/foo',
        isNew: false,
    },
    {
        labelText: 'Broken link',
        labelTranslationKey: 'labels.broken',
        url: '/bar/wopiufowieuo',
        isNew: false,
    },
    {
        labelText: 'Bar',
        labelTranslationKey: 'labels.bar',
        url: '/bar',
        isNew: true,
    },
];

const NAVIGATION_TRANSLATION_NS: string = 'navigation';

const SUPPORTED_SECTIONS: Array<string> = ['about', 'foo', 'bar'];

export { NAVIGATION_LIST, NAVIGATION_TRANSLATION_NS, SUPPORTED_SECTIONS };
