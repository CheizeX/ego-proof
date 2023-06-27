import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			gray: {
				1: string;
				2: string;
				3: string;
				4: string;
				5: string;
				6: string;
				7: string;
				8: string;
				9: string;
				10: string;
			};
			red: {
				1: string;
				2: string;
			};
		};
	}
}
declare module '*.svg' {
	const content: any;
	export default content;
}
