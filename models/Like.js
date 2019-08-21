import {Http} from "../util/Http";

export class LikeModel extends Http {
		like(isLike, id, type) {
				let params = {
						method: 'POST',
						data: {
								art_id: id,
								type
						}
				}
				if (isLike === 'like') {
						params.url = '/like'
				} else {
						params.url = '/like/cancel'
				}
				return this.request(params)
		}
		getClassicLikeStatus(artId,category) {
			let params = {
				url: `classic/${category}/${artId}/favor`
			}
			return this.request(params)
		}

}
