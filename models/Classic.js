import {Http} from "../util/Http";

export class ClassicModel extends Http {
		getLatest() {
				return this.request({
						url: 'classic/latest',
				})
		}
}
