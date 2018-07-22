import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL_ENGLISH } from "../../consts/main";

@Injectable()
export class PostProvider {
	constructor(public http: HttpClient) {
		console.log("Hello PostProvider Provider");
	}

	/**
	 * @returns {Array} Returns an array of news.
	 */
	getNews() {
		return this.http.get(`${URL_ENGLISH}/posts?_embed`);
	}

	/**
	 *
	 * @param id
	 * @description returns the post from a given post id.
	 * @returns {Object}
	 */
	getPostById(id: number) {
		return this.http.get(`${URL_ENGLISH}/posts/${id}?_embed`);
	}

	/**
	 *
	 * @param id user id
	 * @description returns a user by a given id.
	 */
	getUser(id: number) {
		return this.http.get(`${URL_ENGLISH}/users/${id}`);
	}

	getCategory(id: number) {
		return this.http.get(`${URL_ENGLISH}/categories/${id}`);
	}
}
